import { client } from "@/app/lib/sanity";
import React from "react";

import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { CarCarousel } from "@/components/CarCarousel";



const Car = async ({ cars }) => {
 

  return (
    <div className="py-10 space-y-7 w-[80%] mx-auto">
      <CarCarousel cars={cars} />
      <h1 className="text-4xl font-bold text-gray-900 text-center justify-center py-5 hover:underline-offset-auto ">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="card flex flex-col justify-between rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-101"
          >
            <Image
              src={urlFor(car.images[0]).url()}
              width={300}
              height={300}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col p-4 grow">
              <h2 className="text-lg font-semibold mb-2">{car.name}</h2>
              <p className="text-gray-700 line-clamp-2 mb-2">
                {car.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-500 font-semibold">
                  {car.price}
                </span>
                <Link href={`/allproducts/${car.slug.current}`}>
                  <button className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";

export default Car;
