"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="flex-1 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>
              If you have questions, or if you would like to make a complaint,
              please contact us by e-mail at{" "}
              <a
                href="mailto:hello@goopss.com"
                className="text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                hello@goopss.com
              </a>{" "}
              or by mail using the details provided below:
            </p>

            <div className="mt-4 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <address className="not-italic">
                <p>Haportzim 27,</p>
                <p>Jerusalem, Israel</p>
              </address>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 