"use client";

import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-row justify-between items-center p-4 ${
        pathname === "/" ? "bg-[#DFEBFF]" : "bg-none"
      } `}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/images/logo.svg"
          alt="Goopss Logo"
          width={100}
          height={30}
          onClick={() => router.push("/")}
        />
      </motion.div>
      <div className="flex flex-row gap-4">
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/about-goopss">About Us</Link>
      </div>
      <div>
        <JoinWaitListButton />
      </div>
    </div>
  );
};

export default Header;
