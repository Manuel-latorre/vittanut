import Image from "next/image";
import logo from "../public/logo.png";
import Vittanut from "./VittanutTextEffect";
import vittanut from "../public/vittanut.svg"
import Link from "next/link";
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 max-md:w-[90%] mx-auto items-center justify-between text-center text-blue-950 bottom-0">
      <div className="flex items-center gap-1">
              <Image src={vittanut} alt="LOGO" width={40} height={40} data-aos="zoom-in"/>
              <Vittanut/>

            </div>
      {/* <p>Nuez Pecán en mitades.</p>
      <p>NMC 0802.99.00.21.T</p>
      <p>Fancy Junio Mammoth Halves - 260-295 mitades por libra.</p>
      <p>Fancy Jumbo Halves - 325-355 mitades por libra.</p> */}

      <div className="flex flex-col gap-4 mt-4">
        <h4 className="footerTitle" data-aos="fade-right">DATOS EXPORTACIÓN</h4>
        {/* <p>Certificado de Operación Orgánica</p>
        <p>Certificado de Procesamiento Orgánico</p> */}
        <Link className="underline" href={"https://drive.google.com/file/d/1t5g09qRhpwWulbSIYqvPG-Qei-TOfUB5/view"} target="_blank">Certificado por Organización Internacional Agropecuaria (OIA)</Link>
      </div>

      <div className="flex flex-col gap-4 mt-4 items-center">
        <h4 className="footerTitle" data-aos="fade-right">CONTACTO</h4>
        {/* <p>Certificado de Operación Orgánica</p>
        <p>Certificado de Procesamiento Orgánico</p> */}
        <Link className="flex items-center gap-2" href={"https://wa.me/541159388926"} target="_blank"><PhoneIcon width={16} height={16}/> +541159388926</Link>
        <div className="flex items-center gap-2"><MailIcon width={16} height={16}/> Somosvittanut@gmail.com</div>
        <Link className="flex items-center gap-2" href={"https://instagram.com/vittanut"} target="_blank"><InstagramIcon width={16} height={16}/> vittanut</Link>
      
      </div>

      <p className="mt-8">
        © Copyright <span className="font-semibold">Vanguard IA</span>. Todos
        los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
