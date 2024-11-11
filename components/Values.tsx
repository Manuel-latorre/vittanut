"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import cliente from '../public/cliente.jpg'
import cultivo from '../public/cultivo.jpg'
import compromiso from '../public/compromiso.png'


export default function ValuesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src as any} card={card as any} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Enfoque en el cliente",
    title: "Nos dirigimos principalmente a compradores mayoristas que valoran la calidad y la sostenibilidad.",
    src: "https://res.cloudinary.com/drsrva2kp/image/upload/v1731299248/sustainable-development-goals-still-life_dmsh9a.jpg",
    content: <DummyContent />,
  },
  {
    category: "Cultivo orgánico",
    title: "Nuestro compromiso con la agricultura orgánica nos llevó a tener nuestra propia planta de proceso con la que pelamos y envasamos nuestra producción.",
    src: "https://i.postimg.cc/fyLH3mhn/top-view-walnuts-nutcracker-table-cloth-horizontal.jpg",
    content: <DummyContent />,
  },
  {
    category: "Nuestro compromiso",
    title: "Garantizamos productos de alta calidad y el mayor control en toda la cadena.",
    src: "https://res.cloudinary.com/drsrva2kp/image/upload/v1731299233/Captura_de_pantalla_2024-11-11_005809_ws6rv4.png",
    content: <DummyContent />,
  },
];
