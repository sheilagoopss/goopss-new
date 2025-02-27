"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center p-4">
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
          />
        </motion.div>
        <div className="flex flex-row gap-4">
          <Link href="#how-it-works">How it works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/about-goopss">About</Link>
          <Link href="#blog">Blog</Link>
        </div>
        <div className="flex flex-row gap-4">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-4 border-t border-gray-200">
        <p>© 2024 Goopss. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Service</Link>
          <Link href="#cookies">Cookies Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
