import React from 'react';
import { FaStar } from 'react-icons/fa';

const DashboardTable = ({ enrolledCourses }) => {
    // Show only first 5 recent enrollements
    const recentEnrolled = enrolledCourses.slice(0, 5);

    return (
        <div className="bg-base-100 p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-bold text-base-content mb-4 border-b pb-2">Recent Enrolled Courses</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-base-200 text-base-content">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentEnrolled.length > 0 ? (
                            recentEnrolled.map((course) => (
                                <tr key={course._id} className="hover:bg-base-200 transition-colors">
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt={course.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-base-content">{course.title}</div>
                                        <div className="text-sm text-base-content/60">{course.category}</div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-1 text-[#FF8811] font-semibold">
                                            <FaStar /> {course.ratingAvg || "4.8"}
                                        </div>
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
                                <td colSpan="4" className="text-center py-4 text-base-content/50">
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
