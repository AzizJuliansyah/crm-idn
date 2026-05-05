import React from 'react';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function UrgenciesLoading() {
  return <TableSkeleton hasFilterBar={false} />;
}
