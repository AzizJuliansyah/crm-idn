'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { SalesRequestCategoriesSettingsView } from '@/components/features/settings/SalesRequestCategoriesSettingsView';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function SalesRequestCategoriesPage() {
    const { activeCompany: company } = useAppStore();

    if (!company) return <TableSkeleton />;

    return <SalesRequestCategoriesSettingsView company={company} />;
}
