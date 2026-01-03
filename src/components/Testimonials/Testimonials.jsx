import React from 'react';

const Testimonials = () => {
    const reviews = [
        { id: 1, name: 'Alice M.', role: 'Student', text: "Mentora Academy completely changed my career path. The courses are practical and easy to follow." },
        { id: 2, name: 'David K.', role: 'Developer', text: "The instructors are world-class. I learned React and Node.js in just 3 months!" },
        { id: 3, name: 'Sarah L.', role: 'Designer', text: "Best platform for creative skills. The UI/UX course was detailed and very helpful." },
    ];

    return (
        <section className="py-16 px-4 md:px-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Student <span className="text-[#FF8811]">Testimonials</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Hear what our successful students say about their learning experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-400">
                            {review.name.charAt(0)}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                        <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                        <span className="text-sm text-[#b413e1]">{review.role}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
