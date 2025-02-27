"use client";

import { motion } from "framer-motion";

const JoinWaitListButton = () => {
  return (
    <motion.button
      className="bg-black text-white px-6 py-2 rounded-full"
      onClick={() => {
        const join = document.getElementById("join");
        if (join) {
          join.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      Join Waitlist
    </motion.button>
  );
};

export default JoinWaitListButton;
