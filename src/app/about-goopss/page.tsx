"use client";

import { motion } from "framer-motion";

export default function AboutGoopss() {
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
            About Goopss
          </h1>

          <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>
            Goopss, an Israeli startup, was born from a simple idea: Etsy sellers are incredibly talented but sometimes need extra help. As entrepreneurs with years of experience in e-commerce platforms, especially Etsy, our mission is to be hands-on, taking care of your store and making all the adjustments needed for success.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mt-8">
            What We Offer:
            </h2>
            <p>
            Consider us your store's dedicated partner. We work hands-on, making adjustments to help your store stand out, simplifying digital marketing, and ensuring tech is a breeze. We're here for ongoing support, making your Etsy journey not just successful but enjoyable too.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mt-8">
            Our Impact:
            </h2>
            <p>
            Join the growing community of successful Etsy stores with hundreds of happy customers who have chosen goopss. We're not just a service; we're a startup here to help Etsy stores thrive. Join us in making your Etsy store a success!
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mt-8">
            The Founders:
            </h2>
            <p>
            Erez Marchini and Jonathan Prezman, share a similar story. Erez, with his extensive experience in various online stores and recognition as an e-commerce influencer, observed the struggles that talented crafters faced in navigating the basics of online selling. On the other side, Jonathan, with a background in scaling startups and hands-on experience in the tech scene, witnessed the challenges of launching and growing businesses.

            Motivated by these insights, Erez and Jonathan are dedicated to revolutionizing the e-commerce landscape. They take pride in the vibrant community of users, partners, and satisfied customers they’ve built at goopss, all united by the mission to empower Etsy sellers and e-commerce ventures.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
