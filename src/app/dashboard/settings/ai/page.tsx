'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { AiSettingsView } from '@/components/features/settings/AiSettingsView';
import { FormSkeleton } from '@/components/shared/skeletons/FormSkeleton';

export default function AiSettingsPage() {
  const { activeCompany } = useAppStore();
  
  if (!activeCompany) {
    return <FormSkeleton />;
  }

  return <AiSettingsView company={activeCompany} />;
}
