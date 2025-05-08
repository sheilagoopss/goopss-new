"use client";

import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

interface JoinWaitListButtonProps {
  text?: string;
}

const JoinWaitListButton = ({ text = "Join Waitlist" }: JoinWaitListButtonProps) => {
  return (
    <motion.button
      className="bg-black text-white md:px-10 md:py-3 px-5 py-2 rounded-full"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onClick={() => {
        const join = document.getElementById("join");
        if (join) {
          join.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {text}
    </motion.button>
  );
};

export default JoinWaitListButton;
