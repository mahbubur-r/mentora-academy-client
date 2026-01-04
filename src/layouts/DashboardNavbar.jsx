import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { BiLogOut } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';

const DashboardNavbar = ({ toggleSidebar }) => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.log(error));
    }

    return (
        <header className="flex justify-between items-center py-4 px-6 bg-[#f9f9f9]/90 backdrop-blur-md shadow-sm h-20 sticky top-0 z-40">
            <div className="flex items-center">
                {/* Mobile menu button */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden mr-4 text-[#FF8811] text-2xl focus:outline-none"
                >
                    <FaBars />
                </button>
                <h2 className="text-xl font-bold text-[#FF8811]">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-[#b413e1]">
                                <img
                                    alt="User Profile"
                                    src={user?.photoURL || "/user.png"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#FF8811] font-semibold">
                            <li>
                                <Link to="/dashboard/profile" className="justify-between hover:text-[#b413e1]">
                                    Profile
                                    <span className="badge bg-[#b413e1] text-white border-none">New</span>
                                </Link>
                            </li>
                            <li><Link to="/dashboard" className='hover:text-[#b413e1]'>Dashboard Home</Link></li>
                            <li><button onClick={handleLogout} className='hover:text-[#b413e1]'>Logout</button></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default DashboardNavbar;
