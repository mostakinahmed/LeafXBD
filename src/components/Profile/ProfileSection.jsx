import React from "react";

function ProfileSection() {
  return (
    <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
      <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden border-4 border-blue-100">
        <img
          className="w-full h-full object-cover"
          src="https://marblecityhospital.co/wp-content/uploads/2022/11/male_dp.jpg"
          alt="Profile"
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">Mostakin Ahmed</h2>
      <p className="text-gray-500 text-sm">admin@leapx.com.bd</p>
    </div>
  );
}

export default ProfileSection;
