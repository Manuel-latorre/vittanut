import Image from "next/image";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 max-md:w-[90%] mx-auto items-center justify-between text-center text-blue-950">
      <Image src={logo} alt="logo" width={160} height={160} />
      <p>Nuez Pecán en mitades.</p>
      <p>NMC 0802.99.00.21.T</p>
      <p>Fancy Junio Mammoth Halves - 260-295 mitades por libra.</p>
      <p>Fancy Jumbo Halves - 325-355 mitades por libra.</p>

      <div className="flex flex-col gap-4 mt-4">
        <h4 className="font-semibold">DATOS EXPORTACIÓN</h4>
        <p>Certificado de Operación Orgánica</p>
        <p>Certificado de Procesamiento Orgánico</p>
        <p>Certificado por Organización Internacional Agropecuaria (OIA)</p>
      </div>

      <p className="mt-8">
        © Copyright <span className="font-semibold">Vanguard IA</span>. Todos
        los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
