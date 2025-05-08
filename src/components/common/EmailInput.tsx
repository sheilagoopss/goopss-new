"use client";

import { useState } from "react";
import useWaitList from "@/hooks/useWaitlist";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface EmailInputProps {
  buttonText?: string;
  placeholderText?: string;
  savingText?: string;
}

const EmailInput = ({ 
  buttonText = "Join Waitlist",
  placeholderText = "Enter your email",
  savingText = "Saving..."
}: EmailInputProps) => {
  const [email, setEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { saveEmail, isSavingEmail } = useWaitList();

  const handleSubmit = async () => {
    const response = await saveEmail(email);
    if (response.success) {
      setEmail("");
      setFeedbackMessage(response.message);
      setTimeout(() => setFeedbackMessage(""), 3000); // Clear message after 3 seconds
    } else {
      setFeedbackMessage(response.message);
      setTimeout(() => setFeedbackMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      id="join"
      className="flex flex-col gap-2"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={inputVariants}
    >
      <div className="flex flex-row gap-2 border border-gray-300 rounded-2xl p-1">
        <motion.input
          type="email"
          placeholder={placeholderText}
          className="outline-none rounded-md px-4 py-2 md:w-96"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variants={inputVariants}
          required
        />
        <motion.button
          className="bg-black text-white px-4 py-2 rounded-2xl"
          onClick={handleSubmit}
          disabled={isSavingEmail}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          {isSavingEmail ? savingText : buttonText}
        </motion.button>
      </div>
      {feedbackMessage && (
        <motion.div
          className="text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {feedbackMessage}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EmailInput;
