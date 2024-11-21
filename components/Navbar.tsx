"use client"

import Image from "next/image";
import vittanut from "../components/icons/logo.svg"
import MobileMenu from "./MobileMenu";



export default function Navbar() {
    return (
      <nav className="z-50 fixed w-full">
          <div className="flex items-center justify-between p-2 bgMenu">
            <div className="flex items-center gap-1">
              <Image src={vittanut} alt="LOGO" width={150} height={150} data-aos="zoom-in"/>
            </div>
            <MobileMenu />
          </div>
      </nav>
    );
  }