import React from 'react';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function SalesRequestCategoriesLoading() {
  return <TableSkeleton hasFilterBar={false} />;
}
