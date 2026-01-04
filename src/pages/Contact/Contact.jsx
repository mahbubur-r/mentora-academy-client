import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

import { toast } from 'react-toastify';

const Contact = () => {
    const handleSendMessage = (e) => {
        e.preventDefault();
        toast.success("Message sent successfully!");
        e.target.reset(); // clear the form
    }
    return (
        <div className="min-h-screen bg-white">
            <title>Contact Us</title>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#b413e1] to-[#FF8811] py-16 text-center">
                <h1 className="text-4xl text-white font-bold mb-2">Contact Us</h1>
                <p className="text-white opacity-90">We'd love to hear from you!</p>
            </div>

            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Have questions about our courses or need support? Fill out the form or reach out to us directly through the contact information below.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 text-[#b413e1] rounded-full">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-100 text-[#FF8811] rounded-full">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Email</p>
                                    <p className="text-gray-600">supprt@mentora.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 text-[#b413e1] rounded-full">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Address</p>
                                    <p className="text-gray-600">123 Learning Street, Knowledge City, Web 3.0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form onSubmit={handleSendMessage} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b413e1] focus:ring-1 focus:ring-[#b413e1] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b413e1] focus:ring-1 focus:ring-[#b413e1] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b413e1] focus:ring-1 focus:ring-[#b413e1] transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button className="w-full btn bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] text-white border-none text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
