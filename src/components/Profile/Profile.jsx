import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-[1400px] lg:mt-[80px] mt-[47px] px-2 lg:px-4 mx-auto md:py-6 py-3">
      <div className="bg-white shadow p-6 rounded min-h-[calc(100vh-5rem)]">
        <div className="lg:max-w-lg max-w-md mx-auto">
          {/* Profile Photo */}
          <div className="flex items-center justify-center mb-5">
            <img
              src="LOGO COLOR.png"
              alt="profile"
              className="w-24 h-24 object-contain rounded-full border"
            />
          </div>

          {/* Full Name */}
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Mostakin Ahmed"
          />

          {/* Email */}
          <label className="text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            placeholder="mostakin4556@gmail.com"
          />

          {/* Phone Number */}
          <label className="text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            placeholder="+8801773820336"
          />

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">
              Gender
            </label>

            <div className="flex items-center gap-6">
              {/* Male */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Male</span>
              </label>

              {/* Female */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Female</span>
              </label>

              {/* Other */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          {/* Update Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;



