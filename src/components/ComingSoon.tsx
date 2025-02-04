"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  // Animation variants for staggered text animation
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const comingText = "Coming";
  const soonText = "Soon";

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <nav className="flex items-center p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent cursor-default">
            goopss
          </h1>
        </motion.div>
      </nav>

      <main className="flex-1 container mx-auto px-6 flex items-center">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              {comingText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-6xl md:text-8xl font-bold tracking-tighter"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center">
              {soonText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  transition={{
                    duration: 0.5,
                    delay: comingText.length * 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: (comingText.length + soonText.length) * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mt-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-4 h-4 bg-zinc-900 dark:bg-zinc-100 rounded-full"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
