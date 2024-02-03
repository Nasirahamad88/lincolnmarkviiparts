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
          <div className="h-[328px] mb-5 p-4 relative">
              <Image
                  src={urlFor(car.images[0]).url()}
                  width={240}
                  height={147}
                  alt='car parts'
              />
          </div>
    </div>
  )
}
export const dynamic = 'force-dynamic'

export default Car