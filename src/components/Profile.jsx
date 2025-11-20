import React from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* default sign in */}
      <div className=" hover:border-1 py-[6px] px-3 rounded bg-white hover:bg-gray-50">
        <button
          onClick={() => navigate("/signin")}
          className="flex gap-2 justify-center items-center"
        >
          <User className="w-6 h-6" />
          <h2 className="text-lg">Sign in</h2>
        </button>
      </div>
    </div>
  );
};
