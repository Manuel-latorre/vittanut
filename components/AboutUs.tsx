import React from "react";
import ValuesCarousel from "./Values";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 max-md:w-[90%] mx-auto text-center text-blue-950">
      <h3 className="text-blue-900 font-semibold text-2xl text-center px-4 mb-4">
        Sobre nosotros
      </h3>

      <p>
        Somos una compañía dedicada a promover la alimentación saludable y comprometida con la producción de alimentos orgánicos.
      </p>
      <p>
        Cada año, aumentamos nuestra producción plantando nuevos lotes de árboles, mejorando la estructura del suelo con diferentes pasturas y minerales de origen natural y alimentando nuestros árboles con microorganismos que mantienen su nobleza y salud.
      </p>
      <p>
        Trabajamos incansablemente para que la gente se alimente de la mejor manera posible, contribuyendo al bienestar y salud de nuestros consumidores y al desarrollo sostenible de la región.
      </p>

      <div className="mt-12">
        <h3 className="text-blue-900 font-semibold text-2xl text-center px-4 mb-4">
            Valores
        </h3>

        <ValuesCarousel/>
      </div>
    </div>
  );
};

export default AboutUs;
