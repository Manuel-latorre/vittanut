"use client"

'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const processSteps = [
  {
    title: "Cultivo de plantas en el establecimiento",
    description: "Cultivo de plantas en el establecimiento.",
    image: "https://i.postimg.cc/zGtJGzLv/planta-pecan.jpg"
  },
  {
    title: "Implementación de poda",
    description: "Plantación, sistema de riego y cuidados. Sistema de poda de formación anual.",
    image: "https://i.postimg.cc/j24T0t0s/riego-pecan.jpg"
  },
  {
    title: "Cosecha",
    description: "Comienzo de cosecha a partir décimo año.",
    image: "https://i.postimg.cc/7hwvNdCj/cosecha-pecan.jpg"
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
    title: "Clasificación por tamaño",
    description: "Clasificación por tamaño en maquinaria especializada.",
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
    description: "Distribución del producto.",
    image: "https://img.freepik.com/foto-gratis/repartidor-portapapeles_23-2148590673.jpg?t=st=1732131953~exp=1732135553~hmac=240ce3567be567563ee584962480f40820d3340650ee2a14bd97d3d1fab78f98&w=1380"
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
    <div className="w-full">
      <h2 className="titles mb-12" data-aos="zoom-in">TRAZABILIDAD DE LA NUEZ PECÁN</h2>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {processSteps.map((step, index) => (
            <CarouselItem key={index} className="basis-[calc(100%-3rem)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div
                    className="relative h-[500px] bg-cover bg-center transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{ backgroundImage: `url(${step.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300  hover:opacity-90">
                      <div className="p-4 h-full flex flex-col justify-between">
                        <div className="">
                          <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="text-base font-medium text-white">{step.description}</p>
                          <div className="text-right text-white text-sm font-semibold">
                            Paso {index + 1}
                          </div>
                        </div>
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
    </div>
  )
}