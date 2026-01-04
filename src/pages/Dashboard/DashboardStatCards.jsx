import React from 'react';
import { FaBook, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

const DashboardStatCards = ({ totalCourses, enrolledCount, addedCount }) => {
    const stats = [
        {
            title: 'Total Courses',
            value: totalCourses,
            icon: <FaBook className="text-3xl text-white" />,
            bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
        },
        {
            title: 'Enrolled Courses',
            value: enrolledCount,
            icon: <FaCheckCircle className="text-3xl text-white" />,
            bgColor: 'bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]',
        },
        {
            title: 'Added Courses',
            value: addedCount,
            icon: <FaPlusCircle className="text-3xl text-white" />,
            bgColor: 'bg-gradient-to-r from-[#FF8811] to-[#fcb500fa]',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className={`rounded-xl shadow-lg p-6 flex items-center justify-between ${stat.bgColor} text-white transform hover:scale-105 transition-transform duration-300`}>
                    <div>
                        <p className="text-lg font-semibold opacity-90">{stat.title}</p>
                        <h3 className="text-4xl font-bold mt-2">{stat.value}</h3>
                    </div>
                    <div className="p-3 bg-white/20 rounded-full">
                        {stat.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStatCards;
