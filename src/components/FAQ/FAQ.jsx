import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16 px-4 md:px-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Frequently Asked <span className="text-[#b413e1]">Questions</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Common questions about our courses and platform.
                </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                <div className="collapse collapse-plus bg-white rounded-xl shadow-sm border border-gray-100">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-gray-800">
                        How do I access my courses?
                    </div>
                    <div className="collapse-content text-gray-600">
                        <p>Once you purchase a course, it will be available in your Dashboard under "Enrolled Courses". You have lifetime access!</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-xl shadow-sm border border-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium text-gray-800">
                        Can I get a refund?
                    </div>
                    <div className="collapse-content text-gray-600">
                        <p>Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course content.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-xl shadow-sm border border-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium text-gray-800">
                        Do I get a certificate?
                    </div>
                    <div className="collapse-content text-gray-600">
                        <p>Absolutely! Upon completing all lessons and projects in a course, you will receive a verifiable certificate of completion.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-xl shadow-sm border border-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium text-gray-800">
                        Is there mobile support?
                    </div>
                    <div className="collapse-content text-gray-600">
                        <p>Yes, our platform is fully responsive. You can learn on your phone, tablet, or desktop computer anytime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
