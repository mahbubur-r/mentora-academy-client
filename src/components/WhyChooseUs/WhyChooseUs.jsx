import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="bg-[#1e003e] text-white py-16 px-4 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Why You Choose Us
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Join our newsletter for exclusive course launches, tips & insider updates.
                </p>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-[#2a005e] rounded-2xl shadow-lg border border-[#3b0085]">
                        <h3 className="text-xl font-semibold mb-2">Multi-Type Courses</h3>
                        <p className="text-gray-300 text-sm">
                            Access a wide range of courses across different fields and categories.
                        </p>
                    </div>
                    <div className="p-6 bg-[#2a005e] rounded-2xl shadow-lg border border-[#3b0085]">
                        <h3 className="text-xl font-semibold mb-2">Upload Your Course</h3>
                        <p className="text-gray-300 text-sm">
                            Share your knowledge by uploading your own courses and reach learners globally.
                        </p>
                    </div>
                    <div className="p-6 bg-[#2a005e] rounded-2xl shadow-lg border border-[#3b0085]">
                        <h3 className="text-xl font-semibold mb-2">Student Discounts & Free Offers</h3>
                        <p className="text-gray-300 text-sm">
                            Get monthly free courses and exclusive discounts for students.
                        </p>
                    </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Stay Ahead in Courses
                </h2>

                <form className="sm:flex sm:justify-center">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full sm:w-2/3 md:w-1/2 px-5 py-3 rounded-xl text-gray-900 border-none focus:ring-2 focus:ring-[#ffcc00]"
                    />
                    <button
                        type="submit"
                        className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 text-center bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] font-semibold rounded-xl text-black hover:bg-[#e6b800] transition transform hover:scale-105 active:scale-95"
                    >
                        Subscribe Now
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-4">
                    We respect your inbox. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default WhyChooseUs;
