import React from 'react';

const DetailsSkeleton = () => {
    return (
        <div className='mx-5 md:max-w-[1100px] md:mx-auto card bg-base-100 shadow-lg border-gray-200 p-5 mt-3 md:mt-10'>
            <div className="flex flex-col md:flex-row bg-base-100 gap-6">
                {/* Image */}
                <div className="skeleton w-full md:w-[350px] h-[250px] md:h-[350px] rounded-2xl"></div>

                {/* Content */}
                <div className="flex-1 space-y-4 py-4">
                    <div className="skeleton h-8 w-3/4"></div>
                    <div className="skeleton h-6 w-1/2"></div>
                    <div className="skeleton h-24 w-full"></div>
                    <div className="skeleton h-6 w-1/3"></div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mt-6">
                        <div className="flex flex-col items-center gap-2">
                            <div className="skeleton w-8 h-8 rounded-full"></div>
                            <div className="skeleton w-20 h-4"></div>
                            <div className="skeleton w-10 h-6"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="skeleton w-8 h-8 rounded-full"></div>
                            <div className="skeleton w-20 h-4"></div>
                            <div className="skeleton w-10 h-6"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="skeleton w-8 h-8 rounded-full"></div>
                            <div className="skeleton w-20 h-4"></div>
                            <div className="skeleton w-10 h-6"></div>
                        </div>
                    </div>

                    {/* Enroll Button */}
                    <div className="skeleton h-14 w-40 mx-auto mt-6 rounded-lg"></div>
                </div>
            </div>

            {/* Description Section */}
            <div className='mt-8 space-y-3'>
                <div className="skeleton h-8 w-40"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-4/5"></div>
            </div>
        </div>
    );
};

export default DetailsSkeleton;
