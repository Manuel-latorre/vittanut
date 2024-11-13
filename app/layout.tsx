import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import WorldGlobe from "@/components/WorldGlobe";
import NutBenefits from "@/components/NutBenefits";
import Products from "@/components/Products";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vittanut",
  description: "Alimentos sanos para una vida activa",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen">
          <BackgroundVideo />
          <div className="py-4">
            <Navbar />
          </div>
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
        <div id="" className="pt-12">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
