import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollToTop from "@/components/shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emon Hossain",
  description: "This is a personal portfolio web application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e]" />
        <div className="fixed top-0 left-0 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full" />
        <div className="fixed bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full" />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
