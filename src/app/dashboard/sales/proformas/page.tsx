'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { ProformasView } from '@/components/features/proformas/ProformasView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function ProformasPage() {
  const { activeCompany: company } = useAppStore();

  if (!company) return <TableSkeleton />;

  return <ProformasView company={company} />;
}
