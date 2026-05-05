'use client';

import React from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { CompanySettingsView } from '@/components/features/settings/CompanySettingsView';
import { CompanySettingsSkeleton } from '@/components/features/settings/CompanySettingsSkeleton';

export default function CompanySettingsPage() {
  const { activeCompany, fetchCompanies, loading } = useAppStore();
  
  if (loading && !activeCompany) {
    return <CompanySettingsSkeleton />;
  }
  
  if (!activeCompany) {
    return <div className="p-8 text-center text-gray-500">Pilih workspace terlebih dahulu untuk mengatur profil perusahaan.</div>;
  }

  return <CompanySettingsView company={activeCompany} onCompanyUpdate={fetchCompanies} />;
}
