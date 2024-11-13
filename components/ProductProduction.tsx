"use client"

'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    title: "Generación de plantas",
    description: "Generación de plantas en el establecimiento.",
    image: "https://img.freepik.com/foto-gratis/ramas-fondo-nutritiva-fruta-intacta_1142-732.jpg?t=st=1731460716~exp=1731464316~hmac=9bda31ab59f09d7a4773c9bcec0855f6885d35955fec4999284c85774385631e&w=1380"
  },
  {
    title: "Plantación y cuidados",
    description: "Plantación, sistema de riego y cuidados. Sistema de poda de formación anual.",
    image: "https://img.freepik.com/foto-gratis/cultive-manos-poniendo-brotes-suelo_23-2147826188.jpg?t=st=1731465320~exp=1731468920~hmac=25b1a55b5b89a0381f25f5d154f1466146bed92ccd5fd08d60d4b666491e2ef6&w=1380"
  },
  {
    title: "Cosecha",
    description: "Comienzo de cosecha a partir decimo año.",
    image: "https://img.freepik.com/fotos-premium/arbol-nuez-grandes-nueces-concha-verde-cerca-hora-cosecha_206268-6113.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Cosecha artesanal",
    description: "Sistema de cosecha artesanal con shackers y lonas en campo.",
    image: "https://img.freepik.com/foto-gratis/agricultor-tractor_155003-12246.jpg?t=st=1731465659~exp=1731469259~hmac=d827ec8d2256623740d598a4557f70c6f7db2814a52fb511440f029ca012a691&w=1380"
  },
  {
    title: "Traslado del fruto",
    description: "Traslado del fruto del campo a planta de limpieza, secado, crackeo y envasado.",
    image: "https://img.freepik.com/fotos-premium/pecans-descascarados-linea-produccion-instalacion-procesamiento-nueces-control-calidad_97843-68031.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Proceso de secado",
    description: "Secado de la Materia Prima: Se reduce la humedad entre 5% y 5,8%.",
    image: "https://img.freepik.com/fotos-premium/monton-nueces-pecan-aisladas-fondo-crudo_1212634-8186.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Clasifiación por tamaño",
    description: "Clasificación por Tamaño en maquinaria especializada.",
    image: "https://img.freepik.com/foto-gratis/tiro-macro-nueces-mercado_23-2148263796.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Quebrado de la cáscara",
    description: "\"Craqueadora,\" que rompe las cáscaras mediante pistones neumáticos.",
    image: "https://img.freepik.com/foto-gratis/surtido-deliciosos-bocadillos-saludables_23-2149049018.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Pelado del Fruto",
    description: "Mediante golpes dentro de un tambor rotativo, la fruta se separa de la cáscara.",
    image: "https://img.freepik.com/fotos-premium/fotografia-primer-plano-nueces-pecan-secas-comestibles_1012221-9007.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Limpieza por Densidad",
    description: "Conducto de succión que retira la cáscara y permite que el fruto continúe.",
    image: "https://img.freepik.com/foto-gratis/varios-aperitivos-frutos-secos-organicos-tazon_23-2148675545.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: " Inspección y Tamizado",
    description: "En una mesa vibratoria de inspección, retiro artesanal de imperfecciones e impurezas.",
    image: "https://img.freepik.com/foto-gratis/hombre-asiatico-maduro-delantal-pie-junto-al-equipo-tostado-cafe-controles-control_1098-20597.jpg?t=st=1731466544~exp=1731470144~hmac=7db98bc0b32bf8b511b388616d9e04ba546157336c17b497ac9d7d3aee646a3f&w=740"
  },
  {
    title: "Empaque Final",
    description: "Se envasa al vacío para conservar su frescura.",
    image: "https://img.freepik.com/fotos-premium/bolsas-nueces-descascaradas-listas-venta-granja_419341-182454.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
  },
  {
    title: "Distribución",
    description: "Distribution del producto.",
    image: "https://img.freepik.com/foto-gratis/hombre-sujetando-portapapeles-plano-medio_23-2148943317.jpg?t=st=1731466834~exp=1731470434~hmac=026a03f8a16803d8c4f21dee1e83b1a21019e69ef0f9573d0cb8d1d9989b5500&w=1380"
  }
]

export default function ProductProduction() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <h2 className="titles mb-8" data-aos="fade-right">Trazabilidad del Proceso de Producción de Nuez Pecán</h2>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {processSteps.map((step, index) => (
            <CarouselItem key={index} className="basis-[calc(100%-3rem)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div
                    className="relative h-[250px] sm:h-[300px] bg-cover bg-center transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{ backgroundImage: `url(${step.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-80 hover:opacity-90">
                      <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-200">{step.description}</p>
                        </div>
                        <div className="text-right text-white text-xs sm:text-sm">Paso {index + 1}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      {/* <div className="mt-16 flex justify-center">
        <div className="flex space-x-2">
          {processSteps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                current === index + 1 ? "bg-primary" : "bg-gray-300"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}