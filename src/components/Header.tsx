"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center p-6 md:p-8">
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/logo.svg"
            alt="goopss Logo"
            width={100}
            height={30}
            className="dark:invert"
          />
        </motion.div>
      </Link>
    </header>
  );
} 