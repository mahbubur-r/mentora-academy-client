import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {user?.displayName}!</h1>
            <p className="text-lg text-gray-600">This is your dashboard overview.</p>
            {/* Add more stats or content here later */}
        </div>
    );
};

export default DashboardHome;
