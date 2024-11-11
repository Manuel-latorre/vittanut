
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-blue-800">
          <Bars3Icon width={30} height={30} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-5">
            <Image src={logo} width={150} height={150} alt="LOGO" />
          </SheetTitle>
          
        </SheetHeader>

        <SheetFooter className="flex flex-col gap-4 items-start">
          <SheetClose asChild>
            <Link href={"#nosotros"} className="text-blue-950 font-semibold text-lg"> 
                Nosotros
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"#valores"} className="text-blue-950 font-semibold text-lg"> 
                Valores
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={"#productos"} className="text-blue-950 font-semibold text-lg"> 
                Productos
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
