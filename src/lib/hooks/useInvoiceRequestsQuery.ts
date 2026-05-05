import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { InvoiceRequest } from '@/lib/types';

interface UseInvoiceRequestsQueryParams {
  companyId: string;
  searchTerm?: string;
  filterStatus?: string;
  page?: number;
  pageSize?: number;
  sortConfig?: { key: string; direction: 'asc' | 'desc' } | null;
}

export function useInvoiceRequestsQuery({
  companyId,
  searchTerm,
  filterStatus,
  page = 1,
  pageSize = 20,
  sortConfig,
}: UseInvoiceRequestsQueryParams) {
  return useQuery({
    queryKey: ['invoice_requests', companyId, searchTerm, filterStatus, page, pageSize, sortConfig],
    queryFn: async () => {
      let query = supabase
        .from('invoice_requests')
        .select('*, profile:profiles(*), client:clients(*, client_company:client_companies(*)), quotation:quotations(number), proforma:proformas(number), invoice:invoices(id, number), urgency_level:urgency_levels(id, name, color, sort_order)', { count: 'exact' })
        .eq('company_id', companyId);

      if (filterStatus && filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      if (searchTerm) {
        // Fetch IDs of related records that match the searchTerm
        const [clientRes, companyRes, quotationRes, proformaRes] = await Promise.all([
          supabase.from('clients').select('id').ilike('name', `%${searchTerm}%`),
          supabase.from('client_companies').select('id').ilike('name', `%${searchTerm}%`),
          supabase.from('quotations').select('id').ilike('number', `%${searchTerm}%`),
          supabase.from('proformas').select('id').ilike('number', `%${searchTerm}%`)
        ]);

        const clientIds = clientRes.data?.map(c => c.id) || [];
        const companyIds = companyRes.data?.map(c => c.id) || [];
        
        if (companyIds.length > 0) {
          const { data: companyClients } = await supabase
            .from('clients')
            .select('id')
            .in('client_company_id', companyIds);
          
          companyClients?.forEach(c => {
            if (!clientIds.includes(c.id)) clientIds.push(c.id);
          });
        }

        const quotationIds = quotationRes.data?.map(q => q.id) || [];
        const proformaIds = proformaRes.data?.map(p => p.id) || [];

        // Combine into a single OR filter on the main table
        const orConditions = [`notes.ilike.%${searchTerm}%`];
        if (clientIds.length > 0) orConditions.push(`client_id.in.(${clientIds.join(',')})`);
        if (quotationIds.length > 0) orConditions.push(`quotation_id.in.(${quotationIds.join(',')})`);
        if (proformaIds.length > 0) orConditions.push(`proforma_id.in.(${proformaIds.join(',')})`);

        query = query.or(orConditions.join(','));
      }

      if (sortConfig) {
        query = query.order(sortConfig.key, { ascending: sortConfig.direction === 'asc' });
      } else {
        // Default sort: urgency then id desc
        // Note: multiple orders are applied in sequence
        query = query.order('created_at', { ascending: false });
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      const { data, error, count } = await query.range(from, to);

      if (error) throw error;

      // Note: If searchTerm is provided and we want to search in client.name or quotation.number,
      // we might need to filter the returned 'data' if Supabase's simple .or doesn't cover joined fields.
      // However, for this standardization, we'll assume notes search for now or provide instructions for RPC.
      
      return {
        data: data as any[],
        totalCount: count || 0,
      };
    },
    placeholderData: (previousData) => previousData,
  });
}

export function useInvoiceRequestMutations() {
  const queryClient = useQueryClient();

  const bulkDeleteRequests = useMutation({
    mutationFn: async (ids: number[]) => {
      const { error } = await supabase
        .from('invoice_requests')
        .delete()
        .in('id', ids);
      if (error) throw error;
      return ids;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoice_requests'] });
    },
  });

  const bulkUpdateStatus = useMutation({
    mutationFn: async ({ ids, status }: { ids: number[]; status: string }) => {
      const { error } = await supabase
        .from('invoice_requests')
        .update({ status })
        .in('id', ids);
      if (error) throw error;
      return { ids, status };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoice_requests'] });
    },
  });

  return {
    bulkDeleteRequests,
    bulkUpdateStatus,
  };
}
