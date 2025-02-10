"use client";

import { motion } from "framer-motion";
import React from "react";

interface FooterColumnProps {
  links: Array<{ label: string; href: string }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ links }) => (
  <div className="flex flex-col space-y-4">
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer(): React.JSX.Element {
  const footerSections = [
    {
      links: [
        { label: "About goopss", href: "/about-goopss" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      links: [
        { label: "Terms and Conditions", href: "/terms-and-conditions" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        // { label: "Fees and Charges", href: "/fees-and-charges" },
      ],
    },
    /*
    {
      title: "Team and Clients",
      links: [
        { label: "Featured shops", href: "/shops" },
        { label: "Blog", href: "/blog" },
        { label: "Influencers", href: "/influencers" },
        { label: "Partnerships", href: "/partnerships" },
      ],
    },
    */
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-8 mt-auto bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8"
        >
          {footerSections.map((section, index) => (
            <FooterColumn
              key={index}
              links={section.links}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex justify-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} goopss. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 