import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Web Development in 2026",
            excerpt: "Explore the emerging trends and technologies that are shaping the next generation of web applications, from AI-driven coding to WebAssembly.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "Jan 10, 2026",
            author: "Sarah Johnson"
        },
        {
            id: 2,
            title: "Mastering React Hooks: A Comprehensive Guide",
            excerpt: "Deep dive into React Hooks. Learn how to manage state, side effects, and context more efficiently in your modern React applications.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "Jan 05, 2026",
            author: "Michael Chen"
        },
        {
            id: 3,
            title: "UI/UX Design Principles for Developers",
            excerpt: "Understanding basic design principles can significantly improve the quality of your frontend work. Here are key concepts every developer should know.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "Dec 30, 2025",
            author: "Emily Davis"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <title>Our Blog</title>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#b413e1] to-[#FF8811] py-16 text-center">
                <h1 className="text-4xl text-white font-bold mb-2">Our Latest Blog</h1>
                <p className="text-white opacity-90">Insights, tutorials, and news from the tech world</p>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                    <span>{blog.date}</span>
                                    <span>By {blog.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#b413e1] transition-colors cursor-pointer">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>
                                {/* <button className="mt-auto text-[#FF8811] font-semibold hover:text-[#e07000] transition-colors self-start">
                                    Read More →
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
