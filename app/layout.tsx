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
            <Navbar />
          <main>{children}</main>
        </div>
        <div id="" className="h-screen">
          <WorldGlobe/>
        </div>
        <div id="" className="h-screen">
          <NutBenefits/>
        </div>
        <div id="" className="h-screen">
          <Products/>
        </div>
        {/* <div id="" className="py-12">
          <AboutUs/>
        </div> */}
        {/* <div id="">
          <Footer/>
        </div> */}
      </body>
    </html>
  );
}
