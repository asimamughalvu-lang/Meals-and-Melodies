import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Meals & Melodies",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body className={`${montserrat.variable} antialiased bg-[#FFEBD9]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
