"use client"

import { urlFor } from "@/app/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { CgEye, CgShoppingBag } from 'react-icons/cg'


const Car = ({ car }) => {
    const populerCarCart = car.categories.find((car) =>
    car.name==='Parts'
    )
    
  return (
    <div>
      <div className="h-[228px] rounded-lg w-auto mb-5 relative flex items-center justify-center bg-slate-100">
        <Image
          src={urlFor(car.images[0]).url()}
          width={240}
          height={147}
          alt="car parts"
        />
      </div>
    </div>
  );
}
export const dynamic = 'force-dynamic'

export default Car