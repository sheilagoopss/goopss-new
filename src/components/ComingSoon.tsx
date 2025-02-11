"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  // Animation variants for staggered text animation
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const comingText = "Coming";
  const soonText = "soon...";

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 container mx-auto px-6 flex items-center justify-center py-20">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="flex flex-col -space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl leading-none font-bold text-zinc-700 dark:text-zinc-300"
            >
              AI To Help <span className="text-[#ffb0ee]">Creators Create</span>
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold tracking-[-0.112em] leading-[0.8]"
            >
              goopss<span className="text-[#ffb0ee]">.</span>
            </motion.h2>
          </div>

          <div className="space-y-4 mt-12">
            <div className="flex justify-center">
              {(comingText + "\u00A0" + soonText).split("").map((letter, index) => (
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
                  className="text-2xl md:text-3xl font-bold text-zinc-700 dark:text-zinc-300"
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
