'use client';

import React, { Suspense } from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { InvoiceRequestFormView } from '@/components/features/invoices/InvoiceRequestFormView';
import { useRouter } from 'next/navigation';
import { FormSkeleton } from '@/components/shared/skeletons/FormSkeleton';

export default function CreateInvoiceRequestsPage() {
  const { activeCompany: company, user } = useAppStore();
  const router = useRouter();

  if (!company || !user) return null;

  return (
    <Suspense fallback={<FormSkeleton />}>
      <InvoiceRequestFormView
        company={company}
        user={user}
        onNavigate={(path) => {
          if (path.startsWith('request_invoice')) {
            router.push('/dashboard/sales/invoice-requests');
          }
        }}
      />
    </Suspense>
  );
}
