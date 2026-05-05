import React from 'react';
import { Skeleton } from '@/components/ui';

export const AdminPlatformSettingsSkeleton: React.FC = () => (
  <div className="max-w-4xl space-y-8 animate-pulse">
    <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-none">
      {/* Header Match */}
      <div className="p-8 border-b border-gray-50 flex items-center gap-6">
        <Skeleton className="w-16 h-16 rounded-2xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-48 bg-gray-100" />
          <Skeleton className="h-3 w-64 bg-gray-50" />
        </div>
      </div>
      
      {/* Content Match */}
      <div className="p-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-3 w-32 bg-gray-50" />
              <Skeleton className="h-12 w-full bg-gray-50/50 rounded-md" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-3 w-32 bg-gray-50" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-24 h-24 rounded-2xl bg-gray-50" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-24 bg-gray-50" />
                  <Skeleton className="h-3 w-32 bg-gray-50/50" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
             <Skeleton className="h-48 w-full bg-indigo-50/30 rounded-2xl border border-indigo-50" />
          </div>
        </div>
        <div className="flex justify-end pt-8 border-t border-gray-50">
          <Skeleton className="h-12 w-56 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

export const AdminEmailSettingsSkeleton: React.FC = () => (
  <div className="max-w-3xl space-y-8 animate-pulse">
    <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-none">
      {/* Header Match */}
      <div className="p-8 border-b border-gray-50 flex items-center gap-6">
        <Skeleton className="w-16 h-16 rounded-2xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-48 bg-gray-100" />
          <Skeleton className="h-3 w-64 bg-gray-50" />
        </div>
      </div>
      
      {/* Content Match */}
      <div className="p-10 space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-3 w-32 bg-gray-50" />
            <Skeleton className="h-12 w-full bg-gray-50/50 rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Skeleton className="h-3 w-32 bg-gray-50" />
                <Skeleton className="h-12 w-full bg-gray-50/50 rounded-md" />
             </div>
             <div className="space-y-2">
                <Skeleton className="h-3 w-32 bg-gray-50" />
                <Skeleton className="h-12 w-full bg-gray-50/50 rounded-md" />
             </div>
          </div>
        </div>
        
        <Skeleton className="h-16 w-full bg-gray-50/50 rounded-md" />

        <div className="flex justify-end pt-6 border-t border-gray-50">
          <Skeleton className="h-12 w-48 bg-gray-100 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);
