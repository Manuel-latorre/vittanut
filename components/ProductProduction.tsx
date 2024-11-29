"use client"


import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/app/context/LanguageContext"


export default function ProductProduction() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const { language } = useLanguage();
  
  const processSteps = [
    {
      title: `${language === "es" ? "Cultivo de plantas en el establecimiento" : language === "en" ? "Cultivation of plants on the premises" : "Anbau von Pflanzen auf dem Gelände"}`,
      description: `${language === "es" ? "Germinacion de semillas, cultivo e injerto de variedades específicas." : language === "en" ? "Seed germination, cultivation, and grafting of specific varieties" : "Keimung von Samen, Anbau und Veredelung spezifischer Sorten."}`,
      image: "https://i.postimg.cc/zGtJGzLv/planta-pecan.jpg"
    },
    {
      title: `${language === "es" ? "Plantación y cuidados" : language === "en" ? "Planting and care" : "Pflanzung und Pflege"}`,
      description: `${language === "es" ? "Plantación, sistema de riego, prevención y cuidados de agentes externos. Podas anuales de formación." : language === "en" ? "Planting, irrigation system, prevention, and care against external agents. Annual pruning for formation." : "Pflanzung, Bewässerungssystem, Vorbeugung und Schutz vor äußeren Einflüssen. Jährlicher Formschnitt."}`,
      image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1732708561/imagen-paso2_lih3ny.jpg"
    },
    {
      title: `${language === "es" ? "Cosecha" : language === "en" ? "Harvest" : "Ernte"}`,
      description: `${language === "es" ? "Comienzo de cosecha a partir décimo año." : language === "en" ? "Harvest begins from the tenth year." : "Erntebeginn ab dem zehnten Jahr."}`,
      image: "https://i.postimg.cc/7hwvNdCj/cosecha-pecan.jpg"
    },
    {
      title: `${language === "es" ? "Cosecha artesanal" : language === "en" ? "Handcrafted harvest" : "Handwerkliche Ernte"}`,
      description: `${language === "es" ? "sistema de cosecha artesanal con shackers y lonas en campo." : language === "en" ? "Handcrafted harvest system using shakers and tarps in the field." : "Handwerkliches Erntesystem mit Schüttlern und Planen auf dem Feld."}`,
      image: "https://img.freepik.com/foto-gratis/agricultor-tractor_155003-12246.jpg?t=st=1731465659~exp=1731469259~hmac=d827ec8d2256623740d598a4557f70c6f7db2814a52fb511440f029ca012a691&w=1380"
    },
    {
      title: `${language === "es" ? "Traslado del fruto" : language === "en" ? "Fruit transportation" : "Transport der Früchte"}`,
      description: `${language === "es" ? "Traslado del fruto del campo a planta de limpieza, secado, crackeo y envasado." : language === "en" ? "Transportation of the fruit from the field to the cleaning, drying, cracking, and packaging facility." : "Transport der Früchte vom Feld zur Reinigungs-, Trocknungs-, Knack- und Verpackungsanlage."}`,
      image: "https://img.freepik.com/fotos-premium/pecans-descascarados-linea-produccion-instalacion-procesamiento-nueces-control-calidad_97843-68031.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Proceso de secado" : language === "en" ? "Drying process" : "Trocknungsprozess"}`,
      description: `${language === "es" ? "Secado de la Materia Prima: Se reduce la humedad entre 5% y 5,8%." : language === "en" ? "Drying of Raw Material: Moisture is reduced to between 5% and 5.8%." : "Trocknung des Rohmaterials: Die Feuchtigkeit wird auf 5 % bis 5,8 % reduziert."}`,
      image: "https://img.freepik.com/fotos-premium/monton-nueces-pecan-aisladas-fondo-crudo_1212634-8186.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Clasificación por tamaño" : language === "en" ? "Size classification" : "Größenklassifizierung"}`,
      description: `${language === "es" ? "Clasificación por tamaño en maquinaria especializada." : language === "en" ? "Size classification using specialized machinery." : "Größenklassifizierung mit spezialisierter Maschine."}`,
      image: "https://img.freepik.com/foto-gratis/tiro-macro-nueces-mercado_23-2148263796.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Quebrado de la cáscara" : language === "en" ? "Shell cracking" : "Schalenbrechen"}`,
      description: `${language === "es" ? "\"Craqueadora,\" que rompe las cáscaras mediante pistones neumáticos." : language === "en" ? "\"Cracker,\" which breaks the shells using pneumatic pistons." : "\"Knacker,\" der die Schalen mit pneumatischen Kolben bricht."}`,
      image: "https://img.freepik.com/foto-gratis/surtido-deliciosos-bocadillos-saludables_23-2149049018.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Pelado del Fruto" : language === "en" ? "Fruit peeling" : "Schälen der Frucht"}`,
      description: `${language === "es" ? "Mediante golpes dentro de un tambor rotativo, la fruta se separa de la cáscara." : language === "en" ? "Through impacts inside a rotating drum, the fruit is separated from the shell." : "Durch Schläge in einer rotierenden Trommel wird die Frucht von der Schale getrennt."}`,
      image: "https://img.freepik.com/fotos-premium/fotografia-primer-plano-nueces-pecan-secas-comestibles_1012221-9007.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Limpieza por Densidad" : language === "en" ? "Density-based cleaning" : "Reinigung nach Dichte"}`,
      description: `${language === "es" ? "Conducto de succión que retira la cáscara y permite que el fruto continúe." : language === "en" ? "Suction duct that removes the shell and allows the fruit to continue." : "Saugkanal, der die Schale entfernt und die Frucht weiterleitet."}`,
      image: "https://img.freepik.com/foto-gratis/varios-aperitivos-frutos-secos-organicos-tazon_23-2148675545.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Inspección y Tamizado" : language === "en" ? "Inspection and Sieving" : "Inspektion und Siebung"}`,
      description: `${language === "es" ? "En una mesa vibratoria de inspección, retiro artesanal de imperfecciones e impurezas." : language === "en" ? "On a vibrating inspection table, handcrafted removal of imperfections and impurities." : "Auf einem vibrierenden Inspektionstisch, handwerkliche Entfernung von Unvollkommenheiten und Verunreinigungen."}`,
      image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1732222783/image_1_1_ujliwo.png"
    },
    {
      title: `${language === "es" ? "Empaque Final" : language === "en" ? "Final Packaging" : "Endverpackung"}`,
      description: `${language === "es" ? "Se envasa al vacío para conservar su frescura." : language === "en" ? "Vacuum-sealed to preserve its freshness." : "Vakuumverpackt, um die Frische zu bewahren."}`,
      image: "https://img.freepik.com/fotos-premium/bolsas-nueces-descascaradas-listas-venta-granja_419341-182454.jpg?uid=R68096962&ga=GA1.1.1128079462.1729955547&semt=ais_hybrid"
    },
    {
      title: `${language === "es" ? "Distribución" : language === "en" ? "Distribution." : "Verteilung"}`,
      description: `${language === "es" ? "Distribución del producto" : language === "en" ? "Product distribution." : "Produktverteilung."}`,
      image: "https://res.cloudinary.com/drsrva2kp/image/upload/v1732198953/Captura_de_pantalla_2024-11-21_112030_ee0brv.png"
    }
  ]

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
    <div className="w-full" id="trazabilidad">
      {
        language === "es" ? 
        <h2 className="titles mb-12 lg:mt-24" data-aos="zoom-in">TRAZABILIDAD DE <br className="lg:hidden"/> LA NUEZ PECÁN</h2>
        :
        language === "en" ? 
        <h2 className="titles mb-12 lg:mt-24" data-aos="zoom-in">TRACEABILITY OF <br className="lg:hidden"/> PECAN NUTS</h2>
        :
        <h2 className="titles mb-12 lg:mt-24" data-aos="zoom-in">RÜCKVERFOLGBARKEIT <br className="lg:hidden"/> DER PECANNUSS</h2>

      }
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
                            {language === "es" ? "Paso" : language === "en" ? "Step" : "Schritt"} {index + 1}
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