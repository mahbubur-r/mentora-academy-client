import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import DashboardStatCards from './DashboardStatCards';
import DashboardCharts from './DashboardCharts';
import DashboardTable from './DashboardTable';
import DashboardSkeleton from '../../components/Skeleton/DashboardSkeleton';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [addedCourses, setAddedCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.email) return;

            try {
                // Fetch All Courses
                const coursesRes = await fetch('https://mentora-academy-server.vercel.app/courses');
                const coursesData = await coursesRes.json();
                setCourses(coursesData);

                // Fetch Enrolled Courses
                const enrolledRes = await fetch(`https://mentora-academy-server.vercel.app/enrolledCourses/user/${user.email}`);
                const enrolledData = await enrolledRes.json();
                setEnrolledCourses(enrolledData);

                // Fetch Added Courses
                const addedRes = await fetch(`https://mentora-academy-server.vercel.app/add_new_courses?email=${user.email}`);
                const addedData = await addedRes.json();
                setAddedCourses(addedData);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loading) {
        return <DashboardSkeleton />;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome back, <span className="text-[#FF8811]">{user?.displayName}!</span>
            </h1>

            {/* Statistics Cards */}
            <DashboardStatCards
                totalCourses={courses.length}
                enrolledCount={enrolledCourses.length}
                addedCount={addedCourses.length}
            />

            {/* Charts Section */}
            <DashboardCharts courses={courses} />

            {/* Recent Table Section */}
            <DashboardTable enrolledCourses={enrolledCourses} />
        </div>
    );
};

export default DashboardHome;
