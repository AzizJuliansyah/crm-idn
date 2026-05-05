'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { InvoiceRequestsView } from '@/components/features/invoices/InvoiceRequestsView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function InvoiceRequestsPage() {
  const { activeCompany: company } = useAppStore();

  if (!company) return <TableSkeleton />;

  return <InvoiceRequestsView company={company} />;
}
