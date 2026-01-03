import React, { Suspense } from 'react';
import { Link, useLoaderData } from 'react-router';
import CourseCard from '../CourseCard/CourseCard';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

const TopCourses = ({ topCourses }) => {
    const loaderData = useLoaderData();
    const coursesToDisplay = topCourses || loaderData || [];

    return (
        <div>
            <h1 className='text-5xl text-[#2f00ff] font-bold text-center  mt-5 md:mt-15'><span className='text-[#FF8811]'>Top Rated</span> Courses</h1>
            <p className='mt-2 text-base-400 text-center'>Explore All Trending Popular Courses on the Mentora offered by us.</p>
            <Suspense fallback={
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 px-4 md:px-16 max-w-full mx-auto'>
                    {[1, 2, 3, 4].map((i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            }>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 px-4 md:px-16 max-w-full mx-auto'>
                    {
                        coursesToDisplay.map(course => <CourseCard course={course} key={course._id}></CourseCard>)
                    }
                </div>
            </Suspense>
            <div className='text-center md:mt-10'>
                <Link to="/courses"><button className=" btn my-3 mb-5 text-xl text-black rounded-xl bg-gradient-to-r from-[#ff9100] to-[#ffd000]"> Show All Courses</button></Link>
            </div>
        </div>
    );
};

export default TopCourses;