import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="px-4 md:px-16 max-w-[2500px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Mentora Logo" className="w-10 h-10 rounded-full" />
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                                Mentora Academy
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering learners worldwide with cutting-edge skills. Join our community and start your journey today.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition text-xl">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition text-xl">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition text-xl">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#ffcc00] inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-[#ffcc00] transition flex items-center gap-2">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-[#ffcc00] transition flex items-center gap-2">
                                    <span>All Courses</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/top-courses" className="hover:text-[#ffcc00] transition flex items-center gap-2">
                                    <span>Top Rated</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-[#ffcc00] transition flex items-center gap-2">
                                    <span>Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#ffcc00] inline-block pb-1">Support</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-[#ffcc00] transition">Help Center</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ffcc00] transition">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ffcc00] transition">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#ffcc00] transition">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-[#ffcc00] inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#ffcc00] mt-1 shrink-0" />
                                <span>123 Education Street, Learning City, ED 45678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-[#ffcc00] shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-[#ffcc00] shrink-0" />
                                <a href="mailto:support@mentora.com" className="hover:text-white transition">support@mentora.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mentora Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;