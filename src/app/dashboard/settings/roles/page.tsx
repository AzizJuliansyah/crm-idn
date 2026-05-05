'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { RolesManagementView } from '@/components/features/admin/RolesManagementView';
import { supabase } from '@/lib/supabase';
import { CompanyRole } from '@/lib/types';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function RolesPage() {
  const { activeCompany, showToast } = useAppStore();
  const [roles, setRoles] = useState<CompanyRole[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (isInitial = false) => {
    if (!activeCompany) return;
    if (isInitial) setLoading(true);
    try {
      const { data, error } = await supabase.from('company_roles').select('*').eq('company_id', activeCompany.id);
      if (error) throw error;
      if (data) setRoles(data);
    } catch (error: any) {
      showToast("Error fetching roles: " + error.message, 'error');
    } finally {
      if (isInitial) setLoading(false);
    }
  }, [activeCompany, showToast]);

  useEffect(() => {
    if (activeCompany) {
      fetchData(true);
    }
  }, [activeCompany, fetchData]);

  if (!activeCompany) return <TableSkeleton />;

  if (loading) {
    return <TableSkeleton />;
  }

  return <RolesManagementView company={activeCompany} roles={roles} onUpdate={() => fetchData(false)} />;
}
