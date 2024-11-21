"use client";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridImages() {
  return (
    <div className="h-screen w-full max-lg:hidden">
      <LayoutGrid cards={cards} />
    </div>
  );
}



const cards = [
  {
    id: 1,
    content:"",
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/drsrva2kp/image/upload/v1732222869/WhatsApp_Image_2024-07-10_at_17.43.19_1_u2hwqe.jpg",
  },
  {
    id: 2,
    content:"",
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/drsrva2kp/image/upload/v1732223022/pecan-tree_zvhn9y.jpg",
  },
  {
    id: 3,
    content: "",
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/drsrva2kp/image/upload/v1732223185/pecan-grow_pqo8ox.jpg",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/drsrva2kp/image/upload/v1732223088/field_xhus0j.jpg",
  },
];
