
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


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white">
          <Bars3Icon width={30} height={30} />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-[#D7D9C0]">
        <SheetHeader>
          <SheetTitle className="mb-5">
            <Image src={logo} alt="logo" width={200} height={200} />
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
