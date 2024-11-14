"use client"

import Image from "next/image";
import vittanut from "../public/vittanut.svg"
import MobileMenu from "./MobileMenu";
import Vittanut from "./VittanutTextEffect";



export default function Navbar() {
    return (
      <nav className="z-50 fixed w-full">
          <div className="flex items-center justify-between p-2 bgMenu">
            <div className="flex items-center gap-1">
              <Image src={vittanut} alt="LOGO" width={40} height={40} data-aos="zoom-in"/>
              <Vittanut/>

            </div>
            <MobileMenu />
          </div>
      </nav>
    );
  }