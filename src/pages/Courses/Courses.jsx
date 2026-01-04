import React, { Suspense, use, useEffect, useState, useRef } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

// const coursesPromise = fetch('http://localhost:3000/courses')
const coursesPromise = fetch('https://mentora-academy-server.vercel.app/courses')
    .then(res => res.json());

const Courses = () => {
    const courses = use(coursesPromise);

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [priceRange, setPriceRange] = useState("All");
    const [sortBy, setSortBy] = useState("Default");
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8);
    const observerTarget = useRef(null);

    // Simulate initial page loading
    useEffect(() => {
        const timer = setTimeout(() => {
            if (courses && courses.length > 0) setLoading(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [courses]);

    // Get unique categories from courses
    const categories = ["All", ...new Set(courses.map(course => course.category))];

    // Filter Logic
    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "All" || course.category === category;

        // Price Range Logic
        let matchesPrice = true;
        const price = parseFloat(course.price);
        // Note: Assuming price is numeric or clean string. Handle "Free" if needed.
        // If price is string "Free", parseFloat might be NaN. 
        // Let's safe check:
        const isFree = isNaN(price) || price === 0 || course.price === 'Free';

        if (priceRange === "Under $50") {
            matchesPrice = !isFree && price < 50;
        } else if (priceRange === "$50 - $100") {
            matchesPrice = !isFree && price >= 50 && price <= 100;
        } else if (priceRange === "Over $100") {
            matchesPrice = !isFree && price > 100;
        } else if (priceRange === "Free") {
            matchesPrice = isFree;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting Logic
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        if (sortBy === "Price: Low to High") {
            const priceA = a.price === 'Free' ? 0 : parseFloat(a.price) || 0;
            const priceB = b.price === 'Free' ? 0 : parseFloat(b.price) || 0;
            return priceA - priceB;
        } else if (sortBy === "Price: High to Low") {
            const priceA = a.price === 'Free' ? 0 : parseFloat(a.price) || 0;
            const priceB = b.price === 'Free' ? 0 : parseFloat(b.price) || 0;
            return priceB - priceA;
        } else if (sortBy === "Highest Rated") {
            return (b.ratingAvg || 0) - (a.ratingAvg || 0);
        }
        return 0; // Default
    });

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(8);
    }, [searchTerm, category, priceRange, sortBy]);

    // Infinite Scroll Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisibleCount(prev => prev + 4);
                }
            },
            { threshold: 1.0 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [sortedCourses]);

    const visibleCourses = sortedCourses.slice(0, visibleCount);

    // Handle search with small spinner delay
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setSearchLoading(true);
        setTimeout(() => setSearchLoading(false), 600); // show spinner for 0.6s
    };

    if (loading) {
        return (
            <div className="mt-10 px-4 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="skeleton h-10 w-80 rounded-xl"></div>
                    <div className="flex gap-2">
                        <div className="skeleton h-10 w-64 rounded-xl"></div>
                        <div className="skeleton h-10 w-32 rounded-xl"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 max-w-full mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mt-10 px-4 md:px-16">
            <title>All Courses</title>
            <div className="flex flex-col xl:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-3xl font-bold text-center xl:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                    Total {sortedCourses.length} Courses Found
                </h2>

                <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="px-4 py-3 border border-orange-200 rounded-xl w-full lg:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF8811] text-base-content bg-base-100 shadow-sm transition-all"
                    />

                    {/* Category Dropdown */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-3 border border-orange-200 rounded-xl w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-[#FF8811] text-base-content bg-base-100 shadow-sm transition-all cursor-pointer"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {/* Price Range Dropdown */}
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="px-4 py-3 border border-orange-200 rounded-xl w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-[#FF8811] text-base-content bg-base-100 shadow-sm transition-all cursor-pointer"
                    >
                        <option value="All">All Prices</option>
                        <option value="Free">Free</option>
                        <option value="Under $50">Under $50</option>
                        <option value="$50 - $100">$50 - $100</option>
                        <option value="Over $100">Over $100</option>
                    </select>

                    {/* Sorting Dropdown */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-3 border border-orange-200 rounded-xl w-full lg:w-56 focus:outline-none focus:ring-2 focus:ring-[#FF8811] text-base-content bg-base-100 shadow-sm transition-all cursor-pointer"
                    >
                        <option value="Default">Sort By: Default</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="Highest Rated">Highest Rated</option>
                    </select>
                </div>
            </div>

            {/* No courses found */}
            {sortedCourses.length === 0 && (
                <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                    <img
                        src="/apperror.png"
                        alt="No courses found"
                        className="w-80 h-80 mb-4"
                    />
                    <p className="text-gray-500 text-lg">No courses match your search or category.</p>
                </div>
            )}

            {/* Courses Grid */}
            {searchLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 max-w-full mx-auto">
                    {[1, 2, 3, 4].map((i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <Suspense fallback={<span>Loading courses...</span>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 max-w-full mx-auto">
                        {visibleCourses.map(course => (
                            <CourseCard key={course._id} course={course} />
                        ))}
                    </div>

                    {/* Infinite Scroll Trigger / Loader */}
                    {visibleCount < sortedCourses.length && (
                        <div ref={observerTarget} className="mt-8 text-center flex justify-center py-4">
                            <span className="loading loading-spinner text-[#FF8811] loading-lg"></span>
                        </div>
                    )}
                </Suspense>
            )}
        </div>
    );
};

export default Courses;
