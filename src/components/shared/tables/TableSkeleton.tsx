import React from 'react';
import { Skeleton } from '@/components/ui';

interface TableSkeletonProps {
  rowCount?: number;
  columnCount?: number;
  hasFilterBar?: boolean;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ 
  rowCount = 7, 
  columnCount = 6,
  hasFilterBar = true
}) => {
  return (
    <div className="flex flex-col space-y-6 animate-pulse">
      {/* Standard Filter Bar Skeleton */}
      {hasFilterBar && (
        <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl border-2 border-gray-300 shadow-none shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="shrink-0 space-y-2">
                <Skeleton className="h-5 w-40 bg-gray-200 rounded-md" />
                <Skeleton className="h-3 w-32 bg-gray-100 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-24 bg-gray-100 rounded-xl" />
              <Skeleton className="h-10 w-36 bg-blue-50 rounded-xl" />
            </div>
          </div>
          <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
            <div className="w-[300px] shrink-0">
              <Skeleton className="h-11 w-full bg-gray-50 rounded-md" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-28 bg-gray-50 rounded-md" />
              <Skeleton className="h-10 w-28 bg-gray-50 rounded-md" />
            </div>
          </div>
        </div>
      )}

      {/* Table Skeleton */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#081526]">
                {Array.from({ length: columnCount }).map((_, i) => (
                  <th key={i} className="px-6 py-5 text-left border-b border-white/5">
                    <Skeleton className="h-4 w-24 bg-white/20 rounded-md" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rowCount }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/30 transition-colors">
                  {Array.from({ length: columnCount }).map((_, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      <Skeleton 
                        className={`h-4 bg-gray-100 rounded-md ${
                          colIndex === 0 ? 'w-48' : 
                          colIndex === columnCount - 1 ? 'w-16 ml-auto' : 'w-32'
                        }`} 
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Skeleton */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <Skeleton className="h-4 w-48 bg-gray-200 rounded-md" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-9 bg-gray-200 rounded-lg" />
            <Skeleton className="h-9 w-9 bg-gray-200 rounded-lg" />
            <Skeleton className="h-9 w-9 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
