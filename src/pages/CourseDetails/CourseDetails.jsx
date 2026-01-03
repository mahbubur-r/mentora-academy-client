import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const CourseDetails = () => {
    const course = useLoaderData()
    const [activeImage, setActiveImage] = React.useState(course.image);

    const { _id, title, category, description, courseDetails, ratingAvg, purchases, reviews, instructor, price } = course;
    const { user } = useContext(AuthContext);

    const handleEnroll = () => {
        if (!user) {
            Swal.fire("Please log in first!");
            return;
        }

        const enrolledData = {
            ...course,
            userEmail: user.email,
            enrolledAt: new Date(),
        };

        fetch("https://mentora-academy-server.vercel.app/enrolledCourses", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(enrolledData),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire("Success!", "You have enrolled in this course!", "success");
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Already Enrolled!", "You have already been enrolled in this course.", "error");
            });
    };

    return (
        <div className='px-4 md:px-16 max-w-[2500px] mx-auto py-10'>
            <title>{title}</title>

            {/* Top Section: Gallery & Key Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Visual Gallery */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[350px] md:h-[500px] mb-4">
                    <img src={activeImage} className='w-full h-full object-contain bg-gray-50' alt={title} />
                </div>

                {/* Key Info */}
                <div className="space-y-6">
                    <div>
                        <span className="badge badge-lg bg-[#FF8811] text-white border-none mb-2">{category}</span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{title}</h1>
                        <p className='text-lg text-gray-500 mt-2 italic'>{description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-[#FF8811] ring-offset-base-100 ring-offset-2">
                                <img src="/instructor_vector.png" onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=Instructor'} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Instructor</p>
                            <h3 className='text-xl font-bold'>{instructor}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="text-center border-r border-gray-200 last:border-0">
                            <p className="text-gray-500 text-sm mb-1">Students</p>
                            <p className="font-bold text-2xl md:text-3xl">{purchases}</p>
                        </div>
                        <div className="text-center border-r border-gray-200 last:border-0">
                            <p className="text-gray-500 text-sm mb-1">Rating</p>
                            <p className="font-bold text-2xl md:text-3xl flex items-center justify-center gap-1 text-[#FF8811]">
                                {ratingAvg} <span className="text-sm text-gray-400">/ 5</span>
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500 text-sm mb-1">Reviews</p>
                            <p className="font-bold text-2xl md:text-3xl">{reviews}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-3">Course Specs</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-clock text-[#FF8811]"></i> <span>Lifetime Access</span></li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-certificate text-[#FF8811]"></i> <span>Certificate of Completion</span></li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-language text-[#FF8811]"></i> <span>English</span></li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                        <div className="text-3xl font-bold text-[#b413e1]">${price || 'Free'}</div>
                        <button
                            onClick={handleEnroll}
                            className="flex-1 btn bg-gradient-to-r from-[#FF8811] to-[#ff9e42] text-white border-none text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-200"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-16">
                <div className="border-b border-gray-200 mb-6">
                    <h2 className="text-2xl font-bold border-b-2 border-[#FF8811] inline-block pb-2 pr-4">Course Overview</h2>
                </div>
                <div className="prose max-w-none text-gray-600 leading-relaxed text-justify">
                    {courseDetails}
                </div>
            </div>

            {/* Reviews Section (Mock) */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(r => (
                        <div key={r} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                                        <span className="text-xs">U{r}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold">Student {r}</p>
                                    <div className="rating rating-xs">
                                        {[1, 2, 3, 4, 5].map(s => <input key={s} type="radio" className="mask mask-star-2 bg-orange-400" checked onChange={() => { }} />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">"This course was exactly what I needed. The instructor explains concepts clearly and the projects are fun."</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;