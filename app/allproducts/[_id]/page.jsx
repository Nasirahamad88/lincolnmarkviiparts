import { client } from "@/app/lib/sanity";
import React from "react";
// import { CarCarousel } from "./CarCarousel";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";



const page = async ({ params }) => {
  const { _id } = params;
  
  const query =`*[_type == 'product' && slug.current == "${_id}"] {
  _rev,
  name,
  slug,
  images,
  price_id,
  description,
  _id,
  categories,
  price
}
`;
  const cars = await client.fetch(query)
 

  return (
   
    <div className="mt-18 min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl mx-auto">
        {cars.map((car) => (
          <div
            key={car._id}
            className="flex items-center bg-white rounded-lg shadow-xl p-10 mb-10 lg:mb-0"
          >
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <Image
                  src={urlFor(car.images[0]).url()}
                  width={300}
                  height={300}
                  alt={car.name}
                  className="w-full relative z-10"
                />
                <div className="border-4  absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h2 className="font-bold uppercase text-2xl mb-5">
                  {car.name}
                </h2>
                <p className="text-sm text-gray-700 line-clamp-2 mb-5">
                  {car.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl leading-none align-baseline font-bold text-green-500">
                    ${car.price}
                  </span>
                  {/* Add to Cart button */}
                </div>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-blue-600 text-white opacity-95 hover:opacity-100 text--900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> <Link href='/contact'>BUY NOW</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";

export default page;
