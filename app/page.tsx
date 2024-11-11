import HometText from "@/components/Home";

// app/page.tsx

const title = `ALIMENTOS SANOS PARA UNA VIDA ACTIVA`
const description = `Nuestro compromiso es proveer alimentos saludables y de alta calidad, contribuyendo al bienestar de nuestros consumidores`

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">
          ALIMENTOS SANOS PARA UNA VIDA ACTIVA
        </h1>
        <HometText words={description}/>
      </div>
      <div>
      </div>
    </div>
  );
}
