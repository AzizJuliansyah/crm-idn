'use client';

import React from 'react';
import { Skeleton } from '@/components/ui';

export const LogActivitySkeleton: React.FC = () => {
    return (
        <div className="flex flex-col space-y-8 pb-20 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl border-2 border-gray-300 shrink-0">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-64 bg-gray-200 rounded-lg" />
                        <Skeleton className="h-4 w-96 bg-gray-100 rounded-md" />
                    </div>
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-48 bg-gray-100 rounded-xl" />
                        <Skeleton className="h-10 w-36 bg-gray-100 rounded-xl" />
                    </div>
                </div>
            </div>

            {/* Metrics Skeleton */}
            <div className="grid grid-cols-5 gap-6 shrink-0">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border-2 border-gray-300 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-8 w-8 rounded-xl bg-gray-100" />
                            <Skeleton className="h-4 w-12 rounded-md bg-gray-50" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-8 w-20 rounded-lg bg-gray-200" />
                            <Skeleton className="h-3 w-24 rounded-md bg-gray-100" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Skeleton */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shrink-0 flex flex-col gap-6">
                <div className="space-y-2">
                    <Skeleton className="h-5 w-48 bg-gray-200 rounded-md" />
                    <Skeleton className="h-3 w-64 bg-gray-100 rounded-md" />
                </div>
                <div className="h-64 w-full bg-gray-50/50 rounded-xl border border-gray-100 flex items-end p-6 gap-4">
                    {[...Array(12)].map((_, i) => (
                        <Skeleton 
                            key={i} 
                            className="flex-1 bg-gray-200 rounded-t-md" 
                            style={{ height: `${Math.random() * 60 + 20}%` }}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-4 justify-center border-t border-gray-50 pt-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="h-8 w-32 rounded-full bg-gray-100" />
                    ))}
                </div>
            </div>

            {/* Timeline Skeleton */}
            <div className="flex-1 bg-white border-2 border-gray-300 rounded-2xl flex flex-col">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/30 flex items-center justify-between shrink-0">
                    <Skeleton className="h-5 w-40 bg-gray-200 rounded-md" />
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-48 bg-white border border-gray-200 rounded-md" />
                        <Skeleton className="h-6 w-24 bg-gray-100 rounded-full" />
                    </div>
                </div>
                <div className="p-6 space-y-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4">
                            <Skeleton className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
                            <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-6 w-6 rounded-full bg-gray-100" />
                                        <Skeleton className="h-4 w-32 bg-gray-200 rounded-md" />
                                        <Skeleton className="h-3 w-24 bg-gray-100 rounded-md" />
                                    </div>
                                    <Skeleton className="h-5 w-16 bg-gray-100 rounded-md" />
                                </div>
                                <Skeleton className="h-4 w-full bg-gray-50 rounded-md" />
                                <Skeleton className="h-4 w-3/4 bg-gray-50 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
