import React from 'react';
import DetailsSkeleton from '../../components/Skeleton/DetailsSkeleton';

const DetailsLoading = () => {
    return (
        <div className='min-h-screen py-10'>
            <DetailsSkeleton />
        </div>
    );
};

export default DetailsLoading;
