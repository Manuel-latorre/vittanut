import type { Metadata } from "next";
import "./globals.css";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import NutBenefits from "@/components/NutBenefits";
import Products from "@/components/Products";
import { Montserrat } from 'next/font/google'
import AboutUs from "@/components/AboutUs";
import ExportData from "@/components/ExportData";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const montserrat = Montserrat({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Vittanut",
  description: "Tu alimento de vida",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <LanguageProvider>

      <body className={`${montserrat.className} bgGeneral antialiased`}>
        <div className="relative min-h-screen">
          <BackgroundVideo />
            <Navbar />
          <main>{children}</main>
        </div>
        <div id='nosotros' className="h-screen">
          <AboutUs/>
        </div>
        <div id="beneficios" className="h-screen">
          <NutBenefits/>
        </div>
        <div id="productos" className="">
          <Products/>
        </div>
        <div id="" className="h-screen">
          <ExportData/>
        </div>
        <div id="" className="">
          <Footer/>
        </div>
      </body>
      </LanguageProvider>
    </html>
  );
}
