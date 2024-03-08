// import { CarCarousel } from "./CarCarousel";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Car from './product'
import { client } from "@/app/lib/sanity";


const getData = async () => {
  const fullQuery = `*[_type == 'product']`;
  const data = await client.fetch(fullQuery);
  return data;
};

import React from 'react'

const AllProducts = async () => {
  const cars = await getData();

  return (
    <div className=" mt-36">
      <Car cars={cars} />
    </div>
  );
};
export const dynamic = "force-dynamic";

export default AllProducts;