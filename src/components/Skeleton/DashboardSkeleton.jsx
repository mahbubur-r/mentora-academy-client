import React from 'react';

const DashboardSkeleton = () => {
    return (
        <div className="w-full h-full p-2 space-y-8 animate-pulse">
            {/* Header Skeleton */}
            <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>

            {/* Stat Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="h-32 bg-gray-200 rounded-2xl shadow-sm"></div>
                ))}
            </div>

            {/* Charts Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pie Chart Skeleton */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
                    <div className="h-6 w-48 bg-gray-200 rounded mb-8 mx-auto"></div>
                    <div className="h-64 w-64 bg-gray-200 rounded-full mx-auto"></div>
                </div>
                {/* Bar Chart Skeleton */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
                    <div className="h-6 w-48 bg-gray-200 rounded mb-8 mx-auto"></div>
                    <div className="flex items-end justify-between h-64 space-x-2 px-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="bg-gray-200 w-12 rounded-t-lg" style={{ height: `${Math.random() * 60 + 30}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Table Skeleton */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="h-6 w-48 bg-gray-200 rounded"></div>
                </div>
                <div className="p-6 space-y-4">
                    {[1, 2, 3, 4, 5].map((row) => (
                        <div key={row} className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                                <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-4 w-20 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
