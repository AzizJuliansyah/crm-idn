'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { QuotationsView } from '@/components/features/quotations/QuotationsView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function QuotationsPage() {
  const { activeCompany } = useAppStore();

  if (!activeCompany) return <TableSkeleton />;

  return <QuotationsView company={activeCompany} />;
}
