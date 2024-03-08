import AllProducts from "@/app/allproducts/page";
// import { CarCarousel } from "@/components/CarCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import PopulerCar from "@/components/PopulerCar";

import Search from "@/components/Search";


export default function Home() {
  return (
    <div className="">
      <Hero />
     {/* <CarCarousel/> */}
      {/* <PopulerCar /> */}
      <AllProducts/>
       <Search/>
      <Footer/>
    </div>
  );
  
}
export const dynamic = 'force-dynamic'

