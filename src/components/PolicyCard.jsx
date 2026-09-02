import React from "react";
import { FaTruck, FaBriefcase, FaDollarSign, FaPhoneAlt } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div className="max-w-[1370px] font-sans hidden md:flex mx-auto bg-white border border-slate-200 px-4 flex-wrap justify-between p-2 m-4 rounded">
      {/* Cancellation & Returns */}
      <div
        className="w-full sm:w-1/4 flex items-center justify-center p-4 gap-5 group transition rounded"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#FDF2EC")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <FaTruck
          size={30}
          className="group-hover:scale-110 transition-transform duration-300"
          style={{ color: "#F66107" }}
        />
        <div>
          <span
            className="block font-bold text-gray-700 transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F66107")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Cancellation & Returns
          </span>
          <p className="text-sm text-gray-500 mt-1">If products not matched</p>
        </div>
      </div>

      {/* Privacy Policy */}
      <div
        className="w-full sm:w-1/4 flex items-center justify-center p-4 gap-4 group transition rounded"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#FDF2EC")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <FaBriefcase
          size={30}
          className="group-hover:scale-110 transition-transform duration-300"
          style={{ color: "#F66107" }}
        />
        <div>
          <span
            className="block font-bold text-gray-700 transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F66107")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Privacy Policy
          </span>
          <p className="text-sm text-gray-500 mt-1">Check before dealing</p>
        </div>
      </div>

      {/* EMI Policy */}
      <div
        className="w-full sm:w-1/4 flex items-center justify-center p-4 gap-4 group transition rounded"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#FDF2EC")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <FaDollarSign
          size={30}
          className="group-hover:scale-110 transition-transform duration-300"
          style={{ color: "#F66107" }}
        />
        <div>
          <span
            className="block font-bold text-gray-700 transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F66107")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            EMI Policy
          </span>
          <p className="text-sm text-gray-500 mt-1">
            We provide 0% EMI facilities*
          </p>
        </div>
      </div>

      {/* Customer Support */}
      <div
        className="w-full sm:w-1/4 flex items-center justify-center p-4 gap-5 group transition rounded"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#FDF2EC")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <FaPhoneAlt
          size={30}
          className="group-hover:scale-110 transition-transform duration-300"
          style={{ color: "#F66107" }}
        />
        <div>
          <span
            className="block font-bold text-gray-700 transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F66107")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Customer Support
          </span>
          <p className="text-sm text-gray-500 mt-1">Call us at 0961-342936</p>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
