import React from 'react';

const DashboardTable = ({ enrolledCourses }) => {
    // Show only first 5 recent enrollements
    const recentEnrolled = enrolledCourses.slice(0, 5);

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Recent Enrolled Courses</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentEnrolled.length > 0 ? (
                            recentEnrolled.map((course) => (
                                <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt={course.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-gray-800">{course.title}</div>
                                        <div className="text-sm opacity-50">{course.category}</div>
                                    </td>
                                    <td>
                                        {course.instructorName || 'Unknown'}
                                    </td>
                                    <td>
                                        <span className="badge badge-warning font-semibold text-white">
                                            ${course.price}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No enrolled courses found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardTable;
