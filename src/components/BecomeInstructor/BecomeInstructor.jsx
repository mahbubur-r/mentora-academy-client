import React from 'react';
import { Link } from 'react-router';

const BecomeInstructor = () => {
    return (
        <section className="py-16 px-4 md:px-16 bg-white">
            <div className="rounded-3xl bg-gradient-to-r from-[#1e003e] to-[#3a0078] p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF8811] opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="md:w-2/3 z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Become an <span className="text-[#FF8811]">Instructor</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl">
                        Join our community of experts and share your knowledge with millions of students around the world. Earn money while making a difference.
                    </p>
                    <Link to="/register">
                        <button className="px-8 py-4 bg-[#FF8811] text-black font-bold rounded-xl shadow-lg hover:bg-[#e67a00] hover:scale-105 active:scale-95 transition-all">
                            Start Teaching Today
                        </button>
                    </Link>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 z-10 flex justify-center">
                    <img src="/instructor_vector.png" alt="Instructor" className="w-64 h-64 object-contain opacity-90 drop-shadow-lg"
                        onError={(e) => e.target.style.display = 'none'} // Hide if image missing
                    />
                </div>
            </div>
        </section>
    );
};

export default BecomeInstructor;
