import React from 'react';
import { FaShoppingCart, FaUserFriends, FaTag } from 'react-icons/fa';
import { MdOutlineReadMore, MdStar } from 'react-icons/md';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    const { _id, image, title, description, price, ratingAvg, category, totalEnrolled } = course
    return (
        <div className="rounded-2xl bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-200">
            <div className="flex flex-col h-[480px]">
                {/* Image */}
                <Link to={`/courseDetails/${_id}`} className="block h-full cursor-pointer">
                    <figure className="relative bg-base-100 pt-5 rounded-t-2xl h-[180px] flex justify-center items-center overflow-hidden transition-colors duration-500">
                        <img
                            className="h-full object-contain hover:scale-105 active:scale-95 transition-transform duration-300"
                            src={image}
                            alt={title}
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#FF8811] shadow-sm flex items-center gap-1">
                            <FaTag /> {category}
                        </div>
                    </figure>
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[56px] mb-2 hover:text-[#FF8811] transition-colors">
                            {title}
                        </h2>
                        {/* <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><FaUserFriends className="text-[#b413e1]" /> {totalEnrolled || 0} Enrolled</span>
                            <span className="badge badge-success badge-xs badge-outline p-2">Availabe</span>
                        </div> */}
                        <p className="text-sm mt-2 line-clamp-3 min-h-[60px] text-center text-base-content/60">
                            {description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center mt-5">
                        <button className="btn bg-[#F1F5E8] text-[#00D390] border-none w-[48%] text-sm">
                            <FaShoppingCart className="mr-2" /> ${price}
                        </button>
                        <button className="btn bg-[#FFF0E1] text-[#FF8811] border-none w-[48%] text-sm">
                            <MdStar className="text-lg" /> {ratingAvg}
                        </button>
                    </div>

                    {/* Details Button */}
                    <Link to={`/courseDetails/${_id}`} className="py-5 pt-2">
                        <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#FF8811] via-[#ff9e42] to-[#FF8811] 
                       text-white font-semibold tracking-wide shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-[1.03] active:scale-[0.95]">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;