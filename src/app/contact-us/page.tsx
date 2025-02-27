"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function Contact() {
  useEffect(() => {
    // Load Tally embeds after component mounts
    window.Tally?.loadEmbeds();
  }, []);

  return (
    <main className="flex-1 container mx-auto px-6 py-12">
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-black bg-none">
          Contact Us
        </h1>
        <iframe
          data-tally-src="https://tally.so/embed/w49575?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height={276}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Contact Form"
        />
      </div>
    </main>
  );
}
