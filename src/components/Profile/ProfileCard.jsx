import React from "react";
import { FaUserEdit, FaSignOutAlt, FaBoxOpen, FaCog } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

function ProfileCards() {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Edit Profile Card */}
      <Link to={`/profile/edit-profile`}>
        <div className="bg-gray-50 hover:bg-blue-50 h-[9rem] transition-all border border-gray-100 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg">
          <FaUserEdit className="text-3xl text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Edit Profile</h3>
          <p className="text-sm text-gray-500 mt-1">
            Update your personal info and photo
          </p>
        </div>
      </Link>

      {/* My Orders Card */}
      <Link to={`/profile/my-order`}>
        <div className="bg-gray-50 hover:bg-blue-50 h-[9rem] transition-all border border-gray-100 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg">
          <FaBoxOpen className="text-3xl text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">My Orders</h3>
          <p className="text-sm text-gray-500 mt-1">
            View your order history and invoices
          </p>
        </div>
      </Link>

      {/* Track Order */}
      <Link to={`/profile/track-order`}>
        <div className="bg-gray-50 hover:bg-blue-50 h-[9rem] transition-all border border-gray-100 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg">
          <FaCog className="text-3xl text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Track Order</h3>
          <p className="text-sm text-gray-500 mt-1">
            Track your order using order ID
          </p>
        </div>
      </Link>

      {/* Settings */}
      <Link to={`/profile/setting`}>
        <div className="bg-gray-50 hover:bg-blue-50 h-[9rem] transition-all border border-gray-100 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg">
          <FaCog className="text-3xl text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
          <p className="text-sm text-gray-500 mt-1">Manage your account</p>
        </div>
      </Link>

      {/* Logout */}
      <div className="bg-gray-50 hover:bg-red-50 h-[9rem] transition-all border border-gray-100 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg">
        <FaSignOutAlt className="text-3xl text-red-600 mb-3" />
        <h3 className="text-lg font-semibold text-red-600">Logout</h3>
        <p className="text-sm text-gray-500 mt-1">Sign out of your account</p>
      </div>
    </div>
  );
}

export default ProfileCards;
