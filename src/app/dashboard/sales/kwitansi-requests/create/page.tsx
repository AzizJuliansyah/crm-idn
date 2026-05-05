'use client';

import React, { Suspense } from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { KwitansiRequestFormView } from '@/components/features/kwitansis/KwitansiRequestFormView';
import { useRouter } from 'next/navigation';
import { FormSkeleton } from '@/components/shared/skeletons/FormSkeleton';

export default function CreateKwitansiRequestsPage() {
    const { activeCompany: company, user } = useAppStore();
    const router = useRouter();

    if (!company || !user) return null;

    return (
        <Suspense fallback={<FormSkeleton />}>
            <KwitansiRequestFormView
                company={company}
                user={user}
                onNavigate={(path) => {
                    if (path.startsWith('request_kwitansi')) {
                        router.push('/dashboard/sales/kwitansi-requests');
                    }
                }}
            />
        </Suspense>
    );
}
