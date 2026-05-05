'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { KwitansiRequestsView } from '@/components/features/kwitansis/KwitansiRequestsView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function KwitansiRequestsPage() {
    const { activeCompany: company } = useAppStore();

    if (!company) return <TableSkeleton />;

    return <KwitansiRequestsView company={company} />;
}
