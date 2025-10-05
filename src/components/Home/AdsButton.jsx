import { motion } from "framer-motion";
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
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-md uppercase shadow-md hover:bg-red-700 transition-all duration-300 truncate"
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
  );
}
