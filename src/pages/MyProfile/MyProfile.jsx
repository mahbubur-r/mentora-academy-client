import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaCamera, FaEdit, FaEnvelope, FaUser, FaSave, FaTimes } from "react-icons/fa";

const MyProfile = () => {
    const { user, modifyUser } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);

    // Sync state if user updates (e.g. on initial load)
    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        modifyUser(name, photoURL)
            .then(() => {
                toast.success("Profile updated successfully!");
                setIsEditing(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to update profile");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(user?.displayName || "");
        setPhotoURL(user?.photoURL || "");
    };

    return (
        <div className="bg-white min-h-[calc(100vh-6rem)] shadow-sm rounded-xl overflow-hidden">
            <title>Dashboard | My Profile</title>
            {/* Cover Section */}
            <div className="h-48 bg-gradient-to-r from-[#b413e1] via-[#8a0cb0] to-[#FF8811] relative">
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Profile Content */}
            <div className="px-8 pb-8">
                {/* Header Section (Avatar & Actions) */}
                <div className="relative flex justify-between items-end -mt-16 mb-6">
                    <div className="flex items-end">
                        <div className="relative">
                            <img
                                src={photoURL || '/user.png'}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
                            />
                            {isEditing && (
                                <div className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full shadow-lg cursor-not-allowed opacity-70" title="Photo edit via URL below">
                                    <FaCamera size={14} />
                                </div>
                            )}
                        </div>
                        <div className="ml-6 mb-2 hidden md:block">
                            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="mb-2">
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="btn bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] text-white border-none hover:opacity-90 transition-opacity gap-2"
                            >
                                <FaEdit /> Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleCancel}
                                    className="btn btn-ghost text-gray-600 gap-2"
                                    disabled={loading}
                                >
                                    <FaTimes /> Cancel
                                </button>
                                <button
                                    onClick={handleUpdate}
                                    className="btn bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] text-white border-none hover:opacity-90 gap-2"
                                    disabled={loading}
                                >
                                    {loading ? <span className="loading loading-spinner loading-xs"></span> : <FaSave />} Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Name/Email (Visible only on small screens) */}
                <div className="md:hidden mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-gray-500">{user?.email}</p>
                </div>


                {/* Info Grid / Edit Form */}
                <div className="border-t pt-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-700">
                        <FaUser className="text-[#b413e1]" /> Personal Information
                    </h3>

                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full focus:outline-none focus:border-[#b413e1]"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Profile Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="input input-bordered w-full focus:outline-none focus:border-[#b413e1]"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                                    disabled
                                    title="Email cannot be changed"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-warning">Email cannot be changed</span>
                                </label>
                            </div>
                        </form>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Full Name</p>
                                <p className="text-lg font-semibold text-gray-800 border-b pb-2">{name}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email Address</p>
                                <p className="text-lg font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                                    {user?.email} <FaCheckCircle className="text-green-500 text-sm" title="Verified" />
                                </p>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Profile Photo URL</p>
                                <p className="text-lg text-gray-600 truncate border-b pb-2">{photoURL || "Not set"}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Simple Icon Component for reuse in this file if needed, 
// though react-icons is better. 
const FaCheckCircle = ({ className, title }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={className} title={title} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path></svg>
)

export default MyProfile;
