import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

const messages = [
  "Limited Time Offer",
  "⚡ Hot Deal ⚡",
  "Don't Miss Out",
  "⚡ Grab It Now ⚡",
];

export default function AdsButton() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 text-center bg-red-600 lg:w-[9rem] xl:w-full  text-white px-3  py-2 rounded-md font-semibold text-sm uppercase hover:scale-105 hover:bg-green-700 shadow-md truncate">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="  font-semibold text-md uppercase transition-all duration-300 text-center"
      >
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {messages[index]}
        </motion.span>
      </motion.button>
    </div>
  );
}
