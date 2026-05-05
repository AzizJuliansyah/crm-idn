'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { KnowledgeBaseView } from '@/components/features/knowledge-base/KnowledgeBaseView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function KnowledgeBasePage() {
  const { activeCompany: company } = useAppStore();

  if (!company) return <TableSkeleton />;

  return <KnowledgeBaseView activeCompany={company} />;
}
