"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png"
import MobileMenu from "./MobileMenu";



export default function Navbar() {
    return (
      <nav className="relative z-50 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <Image src={logo} width={150} height={150} alt="LOGO"/>
            </div>
            {/* <div className="space-x-6">
              <a href="#" className="text-white hover:text-gray-300">Inicio</a>
              <a href="#" className="text-white hover:text-gray-300">Acerca</a>
              <a href="#" className="text-white hover:text-gray-300">Servicios</a>
              <a href="#" className="text-white hover:text-gray-300">Contacto</a>
            </div> */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    );
  }