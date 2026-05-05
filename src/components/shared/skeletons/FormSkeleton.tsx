import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const FormSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 space-y-8 animate-pulse">
      <div className="space-y-4">
        <Skeleton className="h-6 w-48 bg-gray-200" />
        <Skeleton className="h-4 w-64 bg-gray-100" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-24 bg-gray-100" />
            <Skeleton className="h-10 w-full bg-gray-50 rounded-md" />
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-24 bg-gray-100" />
        <Skeleton className="h-32 w-full bg-gray-50 rounded-md" />
      </div>
      
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
        <Skeleton className="h-10 w-24 bg-gray-100 rounded-md" />
        <Skeleton className="h-10 w-32 bg-blue-50 rounded-md" />
      </div>
    </div>
  );
};
