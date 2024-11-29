"use client"

import React from "react";
import nuez from "../public/nuez.jpg";
import Image from "next/image";
import ProductProduction from "./ProductProduction";
import BigPackIcon from "./icons/BigPack";
import SmallPackIcon from "./icons/SmallPackIcon";
import ProductWeb from "./ProductWeb";
import { useLanguage } from "@/app/context/LanguageContext";



const Products = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col pt-12 w-[90%] mx-auto lg:mt-24">
      <h3 className="titles mb-5" data-aos="zoom-in">
        {language === "es" ? "NUESTRAS PRESENTACIONES" : language === "en" ? "OUR PRESENTATIONS" : "UNSERE PRÄSENTATIONEN"}
      </h3>
      <ProductWeb/>
      <div className="flex flex-col items-center gap-8 w-[90%] mx-auto bgDark p-4 rounded-xl mb-[20%] lg:hidden">
        <Image
          src={nuez}
          alt="Nuez pecan"
          className="rounded-xl shadow-xl w-full max-h-[450px]"
        />

        <div className="flex items-center justify-between w-full px-2 mx-auto">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl font-bold textSoft" data-aos="fade-right">
              5kg
            </p>

            <div className="flex flex-col gap-1 items-center">
              <SmallPackIcon />
              <p className="textSoft text-lg font-medium" data-aos="zoom-in">
                40X60
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl font-bold textSoft" data-aos="fade-right">
              1kg
            </p>
            <div className="flex flex-col gap-1 items-center">
              <BigPackIcon />
              <p className="textSoft text-lg font-medium" data-aos="zoom-in">
                40X40
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl font-bold textSoft" data-aos="fade-right">
              500g
            </p>
            <div className="flex flex-col gap-1 items-center">
              <BigPackIcon />
              <p className="textSoft text-lg font-medium" data-aos="zoom-in">
                20X20
              </p>
            </div>
          </div>
        </div>

        <p className="textSoft text-center" data-aos="zoom-in">
          {language === "es" ? "Empaquetado con Polietileno de 80 micrones termosellado al vacío" : language === "en" ? "Packaged with 80-micron polyethylene, vacuum-sealed." : "Verpackt mit 80-Mikron-Polyethylen, vakuumversiegelt"}
        </p>
      </div>

      <ProductProduction />
    </div>
  );
};

export default Products;
