import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import api from '../../api/api.js '

const EnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            if (!user?.email) {
                setLoading(false);
                return;
            }

            try {
                const { data } = await api.get(`/enrolledCourses/user/${user.email}`);
                setEnrolledCourses(data);
            } catch (err) {
                console.error("Failed to fetch enrolled courses:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchEnrolledCourses();
    }, [user]);

    const handleRemove = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This will remove the course from your enrolled list!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, remove it!',
        });

        if (result.isConfirmed) {
            try {
                await api.delete(`/enrolledCourses/${id}`);
                setEnrolledCourses(prev => prev.filter(course => course._id !== id));
                Swal.fire('Removed!', 'The course has been removed.', 'success');
            } catch (err) {
                console.error("Failed to remove course:", err);
                Swal.fire('Error', 'Failed to remove the course.', 'error');
            }
        }
    };

    // Loading state
    if (loading) {
        return <p className="text-center mt-10">Loading your enrolled courses...</p>;
    }

    // User not logged in
    if (!user) {
        return <p className="text-center mt-10">Please log in to see your enrolled courses.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-5 mb-5">
            <title>Enrolled Courses</title>
            <h2 className="text-2xl md:text-3xl text-[#fcb500fa] font-bold text-center mt-5 ">
                My Enrolled Courses: {enrolledCourses.length}
            </h2>

            {enrolledCourses.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                    <img
                        src="/apperror.png"
                        alt="No enrolled courses"
                        className="w-60 h-60 mb-4"
                    />
                    <p className="mb-5 text-center">You haven't enrolled in any courses yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 px-4">
                    {enrolledCourses.map((course) => (
                        <div
                            key={course._id}
                            className="card bg-base-100 shadow-xl flex flex-col h-full border border-base-300 hover:shadow-2xl transition-all duration-300"
                        >
                            <figure className="relative h-48 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src={course.image}
                                    alt={course.title}
                                />
                                <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#FF8811] shadow-sm">
                                    {course.category || 'Course'}
                                </div>
                            </figure>

                            <div className="card-body flex-grow p-5">
                                <h2 className="card-title text-lg font-bold text-base-content line-clamp-2 min-h-[56px] mb-2">
                                    {course.title}
                                </h2>
                                <p className="text-sm text-base-content/70 line-clamp-3 mb-4">
                                    {course.description}
                                </p>

                                <div className="flex items-center gap-2 mt-auto text-sm text-base-content/60 mb-4">
                                    <span className="flex items-center gap-1 justify-center bg-base-200 px-3 py-1 rounded-full"><i className="fa-solid fa-download text-[#00D390]"></i> {course.purchases || 0}</span>
                                    <span className="flex items-center gap-1 justify-center bg-base-200 px-3 py-1 rounded-full"><i className="fa-solid fa-star text-[#FF8811]"></i> {course.ratingAvg || 0}</span>
                                </div>

                                <div className="card-actions justify-end mt-2">
                                    <button
                                        className="btn btn-error btn-sm text-white w-full"
                                        onClick={() => handleRemove(course._id)}
                                    >
                                        <i className="fa-solid fa-trash-can mr-2"></i> Remove Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnrolledCourses;