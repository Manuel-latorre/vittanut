
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";
import logo from "../components/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import TranslationButtons from "./TranslateButtons";


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button className="text-white">
          <Bars3Icon width={30} height={30} />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-[#D7D9C0] h-full flex flex-col justify-between">
       <div>
       <SheetHeader>
          <SheetTitle className="mb-5">
            <Image src={logo} alt="logo" width={200} height={200} />
          </SheetTitle>
          
        </SheetHeader>

        <SheetFooter className="flex flex-col gap-4 mt-4">
          <SheetClose asChild>
            <Link href={"#nosotros"} className="text-blue-950 font-semibold text-lg"> 
                Nosotros
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"#beneficios"} className="text-blue-950 font-semibold text-lg"> 
                Beneficios
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"#productos"} className="text-blue-950 font-semibold text-lg"> 
                Productos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"#trazabilidad"} className="text-blue-950 font-semibold text-lg"> 
              Trazabilidad
            </Link>
          </SheetClose>
        </SheetFooter>
       </div>

          <div className="flex flex-col">
            <TranslationButtons/>
          </div>
      </SheetContent>
    </Sheet>
  );
}
