import React from 'react';
import { Skeleton } from '@/components/ui';

export const AdminDashboardSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
    <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 space-y-6">
      <Skeleton className="w-10 h-10 rounded-xl bg-blue-50/50" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32 bg-gray-50" />
        <Skeleton className="h-10 w-24 bg-gray-100" />
      </div>
    </div>
    <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 space-y-6">
      <Skeleton className="w-10 h-10 rounded-xl bg-emerald-50/50" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32 bg-gray-50" />
        <Skeleton className="h-10 w-24 bg-gray-100" />
      </div>
    </div>
  </div>
);
