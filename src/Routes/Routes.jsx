import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../pages/Loading/Loading';
import DetailsLoading from '../pages/Loading/DetailsLoading';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import MyProfile from '../pages/MyProfile/MyProfile';
import TopCourses from '../pages/TopCourses/TopCourses';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import Courses from '../pages/Courses/Courses';
import AddNewCourse from '../pages/AddNewCourse/AddNewCourse';
import MyAddedCourses from '../pages/MyAddedCourses/MyAddedCourses';
import MyAddedCourseDetails from '../pages/MyAddedCourseDetails/MyAddedCourseDetails';
import UpdateCourse from '../pages/UpdateCourse/UpdateCourse.jsx';
import EnrolledCourses from '../pages/EnrolledCourses/EnrolledCourses.jsx';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardHome from '../pages/Dashboard/DashboardHome';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          try {
            const res = await fetch(
              "https://mentora-academy-server.vercel.app/courses"
            );
            if (!res.ok) throw new Error("Failed to fetch courses");
            const data = await res.json();

            // Helper to parse purchases string (e.g. "1.5K" -> 1500)
            const parsePurchases = (str) => {
              if (typeof str !== 'string') return 0;
              const num = parseFloat(str.replace(/,/g, ''));
              if (str.toLowerCase().includes('k')) {
                return num * 1000;
              }
              return num;
            };

            // Sort by Rating (desc) then Purchases (desc)
            const topRated = data.sort((a, b) => {
              if (b.ratingAvg !== a.ratingAvg) {
                return (b.ratingAvg || 0) - (a.ratingAvg || 0);
              }
              return parsePurchases(b.purchases) - parsePurchases(a.purchases);
            }).slice(0, 8); // Top 8

            return topRated;
          } catch (err) {
            console.error(err);
            return []; // fallback if API fails
          }
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/blog',
        Component: Blog
      },
      {
        path: '/courses',
        Component: Courses
      },
      {
        path: '/top-courses',
        Component: TopCourses,
        loader: async () => {
          try {
            const res = await fetch("https://mentora-academy-server.vercel.app/top-courses");
            if (!res.ok) throw new Error("Failed to fetch top courses");
            return await res.json();
          } catch (err) {
            console.error(err);
            return [];
          }
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/courseDetails/:id',
        loader: ({ params }) => fetch(`https://mentora-academy-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
        hydrateFallbackElement: <DetailsLoading></DetailsLoading>,
      },
      {
        path: '/myAddedCourseDetails/:id',
        loader: ({ params }) => fetch(`https://mentora-academy-server.vercel.app/add_new_courses/${params.id}`),
        element: <PrivateRoute><MyAddedCourseDetails></MyAddedCourseDetails></PrivateRoute>,
        hydrateFallbackElement: <DetailsLoading></DetailsLoading>,
      },
      {
        path: '/updateCourse/:id',
        element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: 'profile',
        element: <MyProfile />
      },
      {
        path: 'enrolled-courses',
        element: <EnrolledCourses />
      },
      {
        path: 'add-course',
        element: <AddNewCourse />
      },
      {
        path: 'added-courses',
        element: <MyAddedCourses />
      }
    ]
  }
]);