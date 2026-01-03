import React from 'react';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

const Loading = () => {
    return (
        <div className='max-w-[2500px] mx-auto px-5 py-10'>
            {/* Header Skeleton */}
            <div className="flex flex-col items-center mb-10 space-y-4">
                <div className="skeleton h-12 w-3/4 md:w-1/2 lg:w-1/3 rounded-lg"></div>
                <div className="skeleton h-6 w-full md:w-2/3 lg:w-1/2 rounded"></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <CardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export default Loading;