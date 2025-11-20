import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] lg:mt-[80px] mt-[47px] px-2 lg:px-4 mx-auto md:py-6 py-3">
      <div className="bg-white p-6 flex w-full justify-center shadow rounded min-h-[calc(100vh-5rem)]">
        <div className=" lg:mt-[20px] rounded w-md p-6 sm:p-10">
          {/* Header */}
          <h1 className="text-center text-xl mb-15">
            SignUp to{" "}
            <span className="text-[#fe741d] text-2xl font-bold">
              Victus <span className="text-black">Byte</span>
            </span>
          </h1>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter Full Name"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#fe741d] dark:bg-indigo-700 dark:border-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#fe741d] dark:bg-indigo-700 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter Phone"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#fe741d] dark:bg-indigo-700 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#fe741d] dark:bg-indigo-700 dark:border-gray-700 dark:text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#fe741d] text-white font-semibold rounded hover:scale-105 transition-transform duration-300"
            >
              SIGN UP
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-5 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-[#fe741d] cursor-pointer hover:underline"
            >
              Sign in
            </span>
          </p>

          {/* Third Party Auth */}
          <div className="flex justify-center flex-wrap gap-3 mt-6">
            {[
              {
                src: "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
                alt: "Google",
              },
              {
                src: "https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/",
                alt: "Linkedin",
              },
              {
                src: "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
                alt: "Github",
                darkInvert: true,
              },
              {
                src: "https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/",
                alt: "Facebook",
              },
              {
                src: "https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/",
                alt: "Twitter",
                darkInvert: true,
              },
              {
                src: "https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/",
                alt: "Apple",
              },
            ].map((icon, index) => (
              <button
                key={index}
                className="p-2 rounded shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className={`h-6 w-6 ${
                    icon.darkInvert ? "filter dark:invert" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Terms */}
          <p className="text-center text-gray-500 text-xs mt-6">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#fe741d] hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#fe741d] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
