import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Goopss",
  description: "Goopss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased min-h-screen flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
