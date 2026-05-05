import React from 'react';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function TicketTopicLoading() {
  return <TableSkeleton hasFilterBar={false} />;
}
