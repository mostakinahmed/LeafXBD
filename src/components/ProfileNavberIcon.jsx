import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const wrapperRef = useRef(null); // ref for click outside

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false); // closes dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Profile navigation
  const goToProfile = () => {
    setIsOpen(false);
    navigate("/profile/home");
  };

  // Authentication navigation
  const goToAuthenticate = () => {
    setIsOpen(false);
    navigate("/signin");
  };

  const goToSettings = () => {
    setIsOpen(false);
    navigate("/profile/settings");
  };

  const logout = () => {
    setIsOpen(false);
    console.log("User logged out");
    // Add your logout logic here
  };

  // Toggle for mobile
  const toggleMenu = () => {
    if (isMobile) setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`relative inline-block text-left`}
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      {/* Profile Icon */}
      <div
        className="cursor-pointer p-1 flex items-center gap-2"
        onClick={toggleMenu}
      >
        <FaUserCircle className="text-3xl text-gray-700 hover:text-blue-600 transition-all" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={wrapperRef}
          className="absolute right-0 mt-1 md:mt-0 w-52 bg-white shadow-lg rounded-md border border-gray-100 pt-2 z-50"
        >
          <div className="px-4 py-2 text-sm text-gray-500 border-b">
            Signed in as <br />
            <span className="font-semibold text-gray-800">Mostakin Ahmed</span>
          </div>

          <button
            onClick={goToAuthenticate}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Sign in
          </button>

          <button
            onClick={goToProfile}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Profile
          </button>
          <button
            onClick={goToSettings}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Settings
          </button>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
            Help Center
          </button>

          <hr className="my-1" />
          <button
            onClick={logout}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
