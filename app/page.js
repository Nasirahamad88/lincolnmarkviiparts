import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopulerCar from "@/components/PopulerCar";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PopulerCar />
      <Footer/>
    </div>
  );
  
}
export const dynamic = 'force-dynamic'

