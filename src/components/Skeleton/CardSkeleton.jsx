import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="rounded-2xl bg-base-100 shadow-lg border border-base-200 h-[470px] flex flex-col p-4">
            {/* Image Placeholder */}
            <div className="skeleton h-[180px] w-full rounded-2xl"></div>

            {/* Content Placeholders */}
            <div className="flex-1 flex flex-col justify-between mt-4">
                <div className="space-y-3">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-3/4 mx-auto"></div>
                    <div className="skeleton h-16 w-full mt-4"></div>
                </div>

                {/* Button Placeholders */}
                <div className="flex justify-between mt-4">
                    <div className="skeleton h-10 w-[48%] rounded-lg"></div>
                    <div className="skeleton h-10 w-[48%] rounded-lg"></div>
                </div>

                {/* Details Button Placeholder */}
                <div className="skeleton h-12 w-full mt-4 rounded-lg"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
