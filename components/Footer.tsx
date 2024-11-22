import Image from "next/image";import React from "react";
import escarapela from "./icons/escarapela.png";
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bgDark rounded-t-3xl p-6 flex max-lg:flex-col justify-between lg:items-center max-lg:h-[400px] lg:h-[300px]">
      <div className="flex items-center justify-between lg:hidden">
        <p className="text-2xl textSoft font-bold">CONTACTO</p>
        <Image src={escarapela} alt="Escarapela" width={40} height={40} />
      </div>

      <div className="flex flex-col gap-6 px-4 lg:hidden">
        <div className="flex items-center gap-4 textSoft">
          <PhoneIcon width={20} height={20} />
          <Link href={"https://wa.me/541159388926"} target="_blank">
            <p className="textSoft font-semibold">+541159388926</p>
          </Link>
        </div>
        <div className="flex items-center gap-4 textSoft">
          <InstagramIcon width={20} height={20} />
          <Link href={"https://www.instagram.com/vittanut/"} target="_blank">
            <p className="textSoft font-semibold">@vittanut</p>
          </Link>
        </div>
        <div className="flex items-center gap-4 textSoft">
          <MailIcon width={20} height={20} />
          <Link href={"mailto:Somosvittanut@gmail.com"} target="_blank">
            <p className="textSoft font-semibold">Somosvittanut@gmail.com</p>
          </Link>
        </div>
      </div>

      <div className="flex justify-center text-center lg:hidden">
        <p className="textSoft font-light text-sm">
          © Copyright Vanguard IA. Todos los derechos reservados.
        </p>
      </div>

      <div className="flex flex-col gap-4  max-lg:hidden px-6">
        <div className="flex items-center gap-4">
          <p className="text-2xl textSoft font-bold">CONTACTO</p>
          <Image src={escarapela} alt="Escarapela" width={40} height={40} />
        </div>
        <div className="flex flex-col gap-6 px-4 mt-4">
          <div className="flex items-center gap-4 textSoft">
            <PhoneIcon width={20} height={20} />
            <Link href={"https://wa.me/541159388926"} target="_blank">
              <p className="textSoft font-semibold">+541159388926</p>
            </Link>
          </div>
          <div className="flex items-center gap-4 textSoft">
            <InstagramIcon width={20} height={20} />
            <Link href={"https://www.instagram.com/vittanut/"} target="_blank">
              <p className="textSoft font-semibold">@vittanut</p>
            </Link>
          </div>
          <div className="flex items-center gap-4 textSoft">
            <MailIcon width={20} height={20} />
            <Link href={"mailto:Somosvittanut@gmail.com"} target="_blank">
              <p className="textSoft font-semibold">Somosvittanut@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden flex flex-col h-full justify-end items-center">
        <div className="flex justify-center text-center">
          <p className="textSoft font-light text-sm">
            © Copyright Vanguard IA. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="max-lg:hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26234.031490570673!2d-59.13552325182621!3d-34.7239930348225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc673a79bfba65%3A0x8991e209c70bc794!2sRP47%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1732230141563!5m2!1ses-419!2sar"
          width="300"
          height="200"
          style={{ borderRadius: 50 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
