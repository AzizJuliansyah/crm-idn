'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { InvoicesView } from '@/components/features/invoices/InvoicesView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function InvoicesPage() {
  const { activeCompany } = useAppStore();

  if (!activeCompany) return <TableSkeleton />;

  return <InvoicesView company={activeCompany} />;
}
