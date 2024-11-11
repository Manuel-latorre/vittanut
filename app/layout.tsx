import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import WorldGlobe from "@/components/WorldGlobe";
import NutBenefits from "@/components/NutBenefits";
import Products from "@/components/Products";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vittanut",
  description: "Alimentos sanos para una vida activa",
};

const montserrat = Montserrat({
  weight: ["200", "400", "600", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="relative min-h-screen">
          <BackgroundVideo />
          <Navbar />
          <main>{children}</main>
        </div>
        <div id="" className="min-h-screen py-12">
          <WorldGlobe/>
        </div>
        <div id="" className="min-h-screen py-12">
          <NutBenefits/>
        </div>
        <div id="" className="min-h-screen py-12">
          <Products/>
        </div>
        <div id="" className="min-h-screen py-12">
          <AboutUs/>
        </div>
        <div id="" className="min-h-screen pt-12">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
