'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { ProfileEditView } from '@/components/features/auth/ProfileEditView';
import { FormSkeleton } from '@/components/shared/skeletons/FormSkeleton';

export default function ProfileSettingsPage() {
  const { user } = useAppStore();
  
  if (!user) return <FormSkeleton />;

  return <ProfileEditView user={user} onUpdate={() => window.location.reload()} />;
}
