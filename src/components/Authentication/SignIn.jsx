import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen">
      <div className="grid md:items-center">
        <div>
          <div className="dark:bg-gray-900 xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 -mt-10 md:mt-0">
            <h1 className="pb-10 md:pb-10 text-xl dark:text-gray-400 text-center cursor-default">
              Login to{"  "}
              <span className="font-bold text-2xl">
                {" "}
                <span className="text-[#fe741d]">Victus</span> Byte
              </span>
            </h1>
            <form action="#" method="post" className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="border dark:bg-indigo-700 bg-white dark:text-gray-300 dark:border-gray-700 p-2 placeholder:text-base border-gray-300 rounded w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 bg-white dark:border-gray-700 p-2 mb-2 placeholder:text-base border-gray-300 rounded w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button
                className="shadow-lg mt-6 p-2 text-white  bg-[#fe741d] rounded w-full hover:scale-105 transition duration-300 ease-in-out"
               
                type="submit"
              >
                SIGN IN
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Create account?
                </span>
                <a
                  className="group transition-all duration-100 ease-in-out"
                  href="#"
                  style={{ color: "#fe741d" }}
                >
                  <span
                    onClick={() => navigate("/signup")}
                    className="bg-left-bottom ml-1 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    signUp
                  </span>
                </a>
              </h3>
            </div>

            {/* Third Party Authentication Options */}
            <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5 flex-wrap"
            >
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
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className={`max-w-[25px] ${
                      icon.darkInvert ? "filter dark:invert" : ""
                    }`}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </button>
              ))}
            </div>

            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
              <p className="cursor-default">
                By signing in, you agree to our{" "}
                <a
                  className="transition-all duration-100 ease-in-out"
                  href="#"
                  style={{ color: "#fe741d" }}
                >
                  <span className="cursor-pointer bg-left-bottom bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms
                  </span>
                </a>{" "}
                and{" "}
                <a
                  className="transition-all duration-100 ease-in-out"
                  href="#"
                  style={{ color: "#fe741d" }}
                >
                  <span className="cursor-pointer bg-left-bottom bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
