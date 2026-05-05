import React from 'react';
import { Skeleton } from '@/components/ui';

export const CompanySettingsSkeleton: React.FC = () => (
  <div className="max-w-4xl flex flex-col gap-6 animate-pulse">
    <div className="bg-white p-4 rounded-2xl border-2 border-gray-300 shadow-none shrink-0">
      <div className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32 bg-gray-100" />
          <Skeleton className="h-3 w-20 bg-gray-50" />
        </div>
      </div>
    </div>

    <div className="bg-white p-10 rounded-2xl border-2 border-gray-300 shadow-none space-y-12 flex-1">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
          <Skeleton className="w-48 h-48 rounded-3xl bg-gray-50" />
          <div className="space-y-2 flex flex-col items-center">
            <Skeleton className="h-3 w-24 bg-gray-50" />
            <Skeleton className="h-2 w-32 bg-gray-50/50" />
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-40 bg-gray-50" />
            <Skeleton className="h-14 w-full bg-gray-50/50 rounded-2xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-40 bg-gray-50" />
            <Skeleton className="h-32 w-full bg-gray-50/50 rounded-2xl" />
          </div>
          <div className="flex justify-end pt-6">
            <Skeleton className="h-12 w-48 bg-indigo-50 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
