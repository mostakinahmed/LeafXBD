import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, ShoppingBag, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaGem } from "react-icons/fa";

export const Profile = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false); // dropdown open/close
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* If user is logged in */}
      {login ? (
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer hover:border-1 py-[6px] px-2 rounded-3xl bg-[#f58138]"
        >
          <button className="flex gap-2 justify-center items-center">
            <User className="w-6 h-6 hover:text-white text-gray-900" />
          </button>
        </div>
      ) : (
        // If user is NOT logged in
        <div className="hover:border-1 py-[6px] px-3 rounded bg-white hover:bg-gray-50">
          <button
            onClick={() => navigate("/signin")}
            className="flex gap-2 justify-center items-center"
          >
            <User className="w-6 h-6" />
            <h2 className="text-lg">Sign in</h2>
          </button>
        </div>
      )}

      {/* Dropdown when logged in */}
      {login && open && (
        <div className="absolute md:top-11 top-10.5 md:right-0 -right-1 w-max md:min-w-70 min-w-1/2 bg-white shadow-xl rounded border z-50 p-3">
          <div className="flex w-full h-12 gap-3">
            <div className="bg-gray-100 w-14 h-11 flex justify-center items-center mt-1.5 rounded-4xl">
              {" "}
              <User className="w-6 h-6 hover:text-white text-gray-800" />
            </div>
            <div className="w-full flex flex-col">
              <div className="border-b text-lg font-bold text-gray-800">
                Mostakin Ahmed
              </div>
              <div className="text-md text-gray-500">+8801773-820336</div>
            </div>
          </div>
          {/* point */}
          <div className="flex border-2 border-[#fe741d] bg-[#fff3eb] w-full h-10 gap-2 mt-5">
            <div className=" flex justify-center items-center gap-3 text-[#fe741d]">
              <FaGem className="ml-3" size={23} color="" />
              <span className="font-bold text-lg">10 Points</span>
            </div>
          </div>
          <ul className="flex flex-col gap-1 mt-2">
            <li className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <ShoppingBag className="w-4 h-4" />
              <span>My Orders</span>
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <UserCog className="w-4 h-4" />
              <span>Track Order</span>
            </li>

            <li
              onClick={() => {
                setLogin(false);
                setOpen(false);
              }}
              className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 cursor-pointer text-red-600"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
