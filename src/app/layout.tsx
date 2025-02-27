import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan } from 'next/font/google'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Goopss",
  description: "Goopss",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
