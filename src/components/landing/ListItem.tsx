"use client";

import { motion } from "framer-motion";

interface ListItemProps {
  title: string;
  description: string;
  className?: string;
}

const listItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.95 },
};

const ListItem = ({ title, description, className }: ListItemProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2 cursor-pointer"
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={listItemVariants}
    >
      <motion.div
        className={`flex flex-col px-10 py-4 rounded-full ${className}`}
        variants={listItemVariants}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ListItem;
