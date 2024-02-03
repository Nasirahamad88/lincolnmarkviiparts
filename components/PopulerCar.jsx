import { client } from '@/app/lib/sanity'
import React from 'react'
import { CarCarousel } from './CarCarousel'
// import Image from 'next/image'
import { urlFor } from "@/app/lib/sanity"

const getData = async () => {
//    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Parts']._id, categories)] {
//   _id,
//   name,
//   description,
//   images,
//   price,
//   price_id,
//   "slug": slug.current,
//   "categories": categories[]->{
//     name
//   }
// }`
  const fullQuery = (`*[_type == 'product']`)
    const data = await client.fetch(fullQuery)
    return data;
}

const PopulerCar =async () => {

  const cars = await getData()
  // console.log(cars)
  return (
    <div className='py-10 space-y-7 '>
      
      <CarCarousel cars={cars} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {cars.map((car) => (
    <div key={car._id} className="card flex flex-col justify-between rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-101">
      <img
        
        src={urlFor(car.images[0]).url()}
        
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col p-4 grow">
        <h2 className="text-lg font-semibold mb-2">{car.name}</h2>
        <p className="text-gray-700 line-clamp-2 mb-2">{car.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-500 font-semibold">{car.price}</span>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  ))}
</div>


                  
                  
              </div>
          
        
  )
}

export default PopulerCar