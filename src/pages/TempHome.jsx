import { motion } from "framer-motion";
import { FiTool, FiCpu, FiLoader } from "react-icons/fi";

export default function TempHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Logo / Brand Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-6 tracking-wide"
      >
        Victus <span className="text-blue-500">Byte</span>
      </motion.h1>

      {/* Loader Animation */}
      <motion.div
        className="relative flex items-center justify-center mb-6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        <div className="absolute w-16 h-16 border-4 border-t-blue-500 border-gray-700 rounded-full"></div>
        <FiCpu className="text-4xl text-blue-400 animate-pulse" />
      </motion.div>

      {/* Animated Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-lg text-gray-300 font-medium flex items-center gap-2"
      >
        <FiTool className="text-blue-400" />
        Under Development
      </motion.h2>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 text-sm text-gray-500 tracking-wide"
      >
        © {new Date().getFullYear()} Victus Byte. All rights reserved.
      </motion.p>
    </div>
  );
}
