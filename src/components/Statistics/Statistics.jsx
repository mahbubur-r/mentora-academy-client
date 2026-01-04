import React from 'react';

const Statistics = () => {
    const stats = [
        { id: 1, count: '10K+', label: 'Active Students' },
        { id: 2, count: '500+', label: 'Expert Instructors' },
        { id: 3, count: '1.2K+', label: 'Premium Courses' },
        { id: 4, count: '4.9', label: 'Average Rating' },
    ];

    return (
        <section className="py-12 bg-base-100 px-4 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-base-200 shadow-lg rounded-2xl p-8 border border-base-300">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#FF8811] mb-2">
                            {stat.count}
                        </h3>
                        <p className="text-base-content/70 font-medium text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;
