import React from 'react';
import { Link } from 'react-router';
import { FaCode, FaPaintBrush, FaChartLine, FaCamera, FaDatabase, FaMusic, FaLanguage, FaBriefcase } from 'react-icons/fa';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Web Dev', icon: <FaCode />, color: 'bg-blue-100 text-blue-600' },
        { id: 2, name: 'Design', icon: <FaPaintBrush />, color: 'bg-pink-100 text-pink-600' },
        { id: 3, name: 'Marketing', icon: <FaChartLine />, color: 'bg-green-100 text-green-600' },
        { id: 4, name: 'Business', icon: <FaBriefcase />, color: 'bg-purple-100 text-purple-600' },
        { id: 5, name: 'Photography', icon: <FaCamera />, color: 'bg-yellow-100 text-yellow-600' },
        { id: 6, name: 'Data Science', icon: <FaDatabase />, color: 'bg-indigo-100 text-indigo-600' },
        { id: 7, name: 'Music', icon: <FaMusic />, color: 'bg-red-100 text-red-600' },
        { id: 8, name: 'Languages', icon: <FaLanguage />, color: 'bg-teal-100 text-teal-600' },
    ];

    return (
        <section className="py-16 px-4 md:px-16 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Explore <span className="text-[#FF8811]">Categories</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Discover your passion among our diverse range of topics and skills.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <Link to="/courses" key={cat.id}>
                        <div
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 h-full"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${cat.color}`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">{cat.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
