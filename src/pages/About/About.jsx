import React from 'react';

const About = () => {
    return (
        <div className="bg-base-100 min-h-screen py-10 px-4 md:px-16">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]">
                    About Mentora Academy
                </h1>

                <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-4 text-[#FF8811]">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        At Mentora Academy, we believe that education is the key to unlocking human potential.
                        Our mission is to provide accessible, high-quality learning experiences that empower individuals
                        to achieve their career goals and personal growth. We connect passionate instructors with
                        eager learners in a dynamic and supportive environment.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6 ">
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 text-[#FF8811]">For Students</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Access to a wide range of expert-led courses</li>
                            <li>Flexible learning at your own pace</li>
                            <li>Interactive assignments and projects</li>
                            <li>Community support and networking</li>
                        </ul>
                    </div>
                    {/* <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 text-[#FF8811]">For Instructors</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Share your expertise with a global audience</li>
                            <li>Earn revenue from your courses</li>
                            <li>Easy-to-use course creation tools</li>
                            <li>Grow your personal brand</li>
                        </ul>
                    </div> */}
                </section>

                <section className="text-center mt-12">
                    <p className="text-xl text-gray-600 font-medium">
                        Join us on this journey of learning and discovery.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
