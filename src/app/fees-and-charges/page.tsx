"use client";

import React from "react";
import { motion } from "framer-motion";

const FeesAndCharges: React.FC = () => {
  const content = {
    introduction: `General payment information
Thank you for selecting goopss for your service needs. In this document, we present the terms and conditions governing payments and fees across our diverse array of products and services.`,
    sections: {
      "1. Fees and Payment": {
        content: "",
        subsections: {
          "1.1 General Fees": "As a cherished customer, we appreciate your commitment to settling the fees associated with the services you subscribe to or purchase. This encompasses any applicable Value Added Tax (VAT) and other pertinent charges. For an in-depth understanding of the fees, please refer to the detailed pricing information available on goopss.com.",
          "1.2 Fee Changes": "We want to keep you informed. Hence, we reserve the right to modify fees, and any such adjustments will be communicated to you well in advance through email."
        }
      },
      "2. Subscription Products and One-Off Products": {
        content: "",
        subsections: {
          "2.1 Payment Terms": "The payment for both subscription products and one-off purchases is due at the point of purchase, ensuring a seamless transaction process."
        }
      },
      "3. Types of Products": {
        content: "Our product offerings are thoughtfully categorized into two primary types: subscriptions and one-offs.",
        subsections: {
          "3.1 One-Off Products": "Examples include Store Analysis and other standalone offerings. These are one-time purchases, providing you with a tailored solution for your immediate needs.",
          "3.2 Subscription Products": "Representing a commitment to continuous service, subscription products are automatically renewed until a written request to terminate the service is received. This ensures uninterrupted access and support."
        }
      },
      "4. Transparency in Fee Adjustments": {
        content: "",
        subsections: {
          "4.1 Communication": "In our commitment to transparency, we communicate any changes in fees well in advance. This ensures that you are fully informed and allows for any necessary adjustments on your end.",
          "4.2 Consideration for Your Convenience": "We understand that adjustments can impact your financial planning. Therefore, we strive to provide notice and clarity to minimize any inconvenience."
        }
      }
    },
    conclusion: "We extend our heartfelt gratitude for your understanding and cooperation in adhering to these payment and fee terms. Should you have any inquiries or concerns, our dedicated customer support team is readily available to assist you. At goopss, we are committed to providing you with a seamless and transparent experience."
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Fees and Charges
          </h1>

          <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
            {/* Introduction */}
            <div className="space-y-4">
              {content.introduction.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sections */}
            {Object.entries(content.sections).map(([title, section]) => (
              <section key={title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {title}
                </h2>
                {section.content && (
                  <p className="mb-4">{section.content}</p>
                )}
                {section.subsections && (
                  <div className="space-y-4 pl-6">
                    {Object.entries(section.subsections).map(([subTitle, content]) => (
                      <div key={subTitle} className="space-y-2">
                        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
                          {subTitle}
                        </h3>
                        <p>{content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
              <p>{content.conclusion}</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default FeesAndCharges; 