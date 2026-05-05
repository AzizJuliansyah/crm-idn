import React from 'react';
import { Skeleton } from '@/components/ui';

interface KanbanSkeletonProps {
  columnCount?: number;
}

export const KanbanSkeleton: React.FC<KanbanSkeletonProps> = ({ 
  columnCount = 4 
}) => {
  return (
    <div className="flex gap-4 h-full overflow-x-auto pb-4 custom-scrollbar">
      {Array.from({ length: columnCount }).map((_, i) => (
        <div key={i} className="flex-1 min-w-[280px] bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col gap-4">
          {/* Column Header */}
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="h-5 w-24 bg-gray-200" />
            <Skeleton className="h-5 w-8 rounded-full bg-gray-200" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <div className="flex justify-between items-center pt-2">
                  <Skeleton className="h-6 w-16 rounded-lg" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
