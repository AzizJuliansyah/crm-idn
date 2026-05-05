'use client';

import React from 'react';

export default function DashboardLoading() {
  return (
    <div className="space-y-8 pb-20 animate-pulse">
      {/* Overview Cards Skeletons - Using similar colors to the actual cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="h-40 bg-blue-600/10 rounded-2xl border-2 border-blue-400/20" />
        <div className="h-40 bg-purple-600/10 rounded-2xl border-2 border-purple-400/20" />
        <div className="h-40 bg-emerald-600/10 rounded-2xl border-2 border-emerald-400/20" />
        <div className="h-40 bg-rose-600/10 rounded-2xl border-2 border-rose-400/20" />
      </div>

      {/* Main Charts Area Skeletons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 h-[380px] space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-5 w-48 bg-gray-100 rounded-md" />
              <div className="h-3 w-64 bg-gray-50 rounded-md" />
            </div>
            <div className="h-5 w-5 bg-gray-100 rounded-md" />
          </div>
          <div className="h-56 w-full bg-gray-50/50 rounded-xl" />
        </div>
        <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 h-[380px] space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-5 w-48 bg-gray-100 rounded-md" />
              <div className="h-3 w-64 bg-gray-50 rounded-md" />
            </div>
            <div className="h-5 w-5 bg-gray-100 rounded-md" />
          </div>
          <div className="h-56 w-full bg-gray-50/50 rounded-xl" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 h-[300px] overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between">
           <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-100" />
              <div className="h-6 w-32 bg-gray-100 mt-2 rounded-md" />
           </div>
           <div className="h-4 w-24 bg-gray-50 mt-3 rounded-md" />
        </div>
        <div className="p-8 space-y-4">
           {Array.from({ length: 3 }).map((_, i) => (
             <div key={i} className="flex justify-between border-b border-gray-50 pb-4">
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gray-50" />
                   <div className="h-4 w-32 bg-gray-50 mt-2 rounded-md" />
                </div>
                <div className="h-4 w-20 bg-gray-50 mt-2 rounded-md" />
                <div className="h-6 w-16 bg-gray-100 rounded-full" />
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
