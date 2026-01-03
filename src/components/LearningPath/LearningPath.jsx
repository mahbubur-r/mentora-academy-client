import React from 'react';

const LearningPath = () => {
    const steps = [
        { id: 1, title: 'Choose a Course', desc: 'Browse our catalog and pick a skill you want to master.', step: '01' },
        { id: 2, title: 'Learn at Your Pace', desc: 'Watch high-quality video lectures and read course materials.', step: '02' },
        { id: 3, title: 'Hands-on Projects', desc: 'Apply what you learn with real-world projects and quizzes.', step: '03' },
        { id: 4, title: 'Get Certified', desc: 'Earn a certificate of completion to showcase on your CV.', step: '04' },
    ];

    return (
        <section className="py-16 px-4 md:px-16 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Your Learning <span className="text-[#b413e1]">Journey</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Start from scratch and become a pro with our structured learning paths.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((item) => (
                    <div key={item.id} className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-[#fff9ee] transition-colors duration-300 group">
                        <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {item.step}
                        </div>
                        <h3 className="mt-8 text-xl font-bold text-gray-800 mb-2 group-hover:text-[#FF8811] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearningPath;
