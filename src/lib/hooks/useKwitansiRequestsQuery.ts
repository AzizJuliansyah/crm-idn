import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { KwitansiRequest } from '@/lib/types';

interface UseKwitansiRequestsQueryParams {
  companyId: string;
  searchTerm?: string;
  filterStatus?: string;
  sortConfig?: { key: string; direction: 'asc' | 'desc' } | null;
  page?: number;
  pageSize?: number;
}

export function useKwitansiRequestsQuery({
  companyId,
  searchTerm,
  filterStatus,
  sortConfig,
  page = 1,
  pageSize = 20,
}: UseKwitansiRequestsQueryParams) {
  return useQuery({
    queryKey: ['kwitansi_requests', companyId, searchTerm, filterStatus, sortConfig, page, pageSize],
    queryFn: async () => {
      let query = supabase
        .from('kwitansi_requests')
        .select('*, client:clients(*, client_company:client_companies(*)), invoice:invoices(id, number), proforma:proformas(id, number), kwitansi:kwitansis(id, number), urgency_level:urgency_levels(id, name, color, sort_order)', { count: 'exact' })
        .eq('company_id', companyId);

      if (searchTerm) {
        // Fetch IDs of related records that match the searchTerm
        const [clientRes, companyRes, invoiceRes, proformaRes] = await Promise.all([
          supabase.from('clients').select('id').ilike('name', `%${searchTerm}%`),
          supabase.from('client_companies').select('id').ilike('name', `%${searchTerm}%`),
          supabase.from('invoices').select('id').ilike('number', `%${searchTerm}%`),
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

        const invoiceIds = invoiceRes.data?.map(i => i.id) || [];
        const proformaIds = proformaRes.data?.map(p => p.id) || [];

        // Combine into a single OR filter on the main table
        const orConditions = [`notes.ilike.%${searchTerm}%`];
        if (clientIds.length > 0) orConditions.push(`client_id.in.(${clientIds.join(',')})`);
        if (invoiceIds.length > 0) orConditions.push(`invoice_id.in.(${invoiceIds.join(',')})`);
        if (proformaIds.length > 0) orConditions.push(`proforma_id.in.(${proformaIds.join(',')})`);

        query = query.or(orConditions.join(','));
      }

      if (filterStatus && filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      if (sortConfig) {
        query = query.order(sortConfig.key, { ascending: sortConfig.direction === 'asc' });
      } else {
        query = query.order('created_at', { ascending: false });
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      const { data, error, count } = await query.range(from, to);

      if (error) throw error;

      return {
        data: data as any[],
        totalCount: count || 0,
      };
    },
    placeholderData: (previousData) => previousData,
  });
}
