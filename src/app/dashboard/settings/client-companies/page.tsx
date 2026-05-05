'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { ClientCompanyCategoriesSettingsView } from '@/components/features/clients/ClientCompanyCategoriesSettingsView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function ClientCompanyCategoriesPage() {
  const { activeCompany: company } = useAppStore();

  if (!company) return <TableSkeleton />;

  return <ClientCompanyCategoriesSettingsView company={company} />;
}
