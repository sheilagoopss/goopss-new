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
    <div className={`w-full ${pathname === "/" || pathname === "/il" ? "bg-[#DFEBFF]" : "bg-none"}`}>
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-3 items-center p-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
          className="justify-self-start"
      >
        <Image
          src="/images/logo.svg"
            alt="goopss Logo"
          width={100}
          height={30}
          onClick={() => router.push("/")}
            className="cursor-pointer"
        />
      </motion.div>
        <div className="flex flex-row gap-8 justify-center">
          {/* <Link href="/contact-us" className="hover:text-gray-600 transition-colors">Contact Us</Link>
          <Link href="/about-goopss" className="hover:text-gray-600 transition-colors">About Us</Link> */}
        </div>
        <div className="justify-self-end">
          <JoinWaitListButton text={pathname === "/il" ? "הצטרף לרשימת המתנה" : undefined} />
      </div>
      </div>
    </div>
  );
};

export default Header;
