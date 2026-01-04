import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaHome, FaUser, FaBook, FaPlus, FaList } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err));
    };

    const sidebarLinks = [
        { path: '/dashboard', label: 'Dashboard Home', icon: <FaHome /> },
        { path: '/dashboard/profile', label: 'My Profile', icon: <FaUser /> },
        { path: '/dashboard/enrolled-courses', label: 'Enrolled Courses', icon: <FaBook /> },
        { path: '/dashboard/add-course', label: 'Add Course', icon: <FaPlus /> },
        { path: '/dashboard/added-courses', label: 'Added Courses', icon: <FaList /> },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar Container */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-base-100 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-center h-20 shadow-md">
                    <Link to="/" className="flex items-center gap-2">
                        <img className='h-[40px] w-[40px] rounded-full' src="/logo.png" alt="Logo" />
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                            Mentora
                        </span>
                    </Link>
                </div>
                <ul className="flex-col py-4 space-y-2 overflow-y-auto h-[calc(100%-5rem)]">
                    {sidebarLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                end={link.path === '/dashboard'}
                                onClick={() => isOpen && toggleSidebar()} // Close on click (mobile)
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 font-bold transition-colors duration-200 
                                    ${isActive
                                        ? 'bg-base-200 border-r-4 border-[#b413e1] text-[#b413e1]'
                                        : 'text-base-content/70 hover:bg-base-200 hover:text-[#b413e1]'
                                    }`
                                }
                            >
                                <span className="mr-3 text-xl">{link.icon}</span>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center px-6 py-3 text-base-content/70 font-bold hover:bg-base-200 hover:text-[#b413e1] transition-colors duration-200"
                        >
                            <span className="mr-3 text-xl"><BiLogOut /></span>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default DashboardSidebar;
