"use client";

import Image from "next/image";
import vittanut from "../components/icons/logo.svg";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import en from "./icons/english.png";
import germany from "./icons/germany.png";
import TranslationButtons from "./TranslateButtons";

export default function Navbar() {
  return (
    <nav className="z-50 fixed w-full">
      <div className="flex items-center justify-between p-2 bgMenu">
        <div className="flex items-center gap-1">
          <Image
            src={vittanut}
            alt="LOGO"
            width={150}
            height={150}
            data-aos="zoom-in"
          />
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <Link href={"#nosotros"} className="textSoft font-semibold text-base lg:text-lg">
            Nosotros
          </Link>
          <Link href={"#beneficios"} className="textSoft font-semibold text-base lg:text-lg">
            Beneficios
          </Link>
          <Link href={"#productos"} className="textSoft font-semibold text-base lg:text-lg">
            Productos
          </Link>
          <Link
            href={"#trazabilidad"}
            className="textSoft font-semibold text-base lg:text-lg"
          >
            Trazabilidad
          </Link>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <TranslationButtons />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
