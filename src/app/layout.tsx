import type { Metadata } from "next";
import { Inter, Jost, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import BottomNav from "@/components/ui/Navbar/BottomNavbar";
import Footer from "@/components/ui/Footer";
import MovingCards from "@/components/Home/MovingCards";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARA BOOK",
  description: "SARA BOOK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jost.variable} ${poppins.variable} antialiased`}
      >
        <div className="fixed top-0 w-full z-50 backdrop-blur-sm">
          <MovingCards />
          <Navbar />
          <BottomNav />
        </div>
        <main className="pt-32 min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
