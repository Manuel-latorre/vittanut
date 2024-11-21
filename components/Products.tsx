import React from "react";
import nuez from "../public/nuez.jpg";
import Image from "next/image";
import ProductProduction from "./ProductProduction";
import BigPackIcon from "./icons/BigPack";
import SmallPackIcon from "./icons/SmallPackIcon";

const Products = () => {
  return (
    <div className="flex flex-col pt-12 w-[90%] mx-auto">
      <h3 className="titles mb-5" data-aos="zoom-in">
        NUESTRAS PRESENTACIONES
      </h3>
      <div className="flex flex-col items-center gap-8 w-[90%] mx-auto bgDark p-4 rounded-xl mb-[20%]">
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
          Empaquetado con Polietileno de 80 micrones termosellado al vacío
        </p>
      </div>

      <ProductProduction />
    </div>
  );
};

export default Products;
