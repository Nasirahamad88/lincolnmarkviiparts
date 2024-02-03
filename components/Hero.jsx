import Image from 'next/image';
import Link from 'next/link';
import Bannerimg from '../public/hero banner.jpg'

// ... other imports

function Hero() {
  return (
    <div className="relative font-sans-serif mt-20 text-white">
      <Image
        src={Bannerimg} // Assuming image is in a public folder
        alt="Banner Image"
        layout="fill" // Ensures aspect ratio is maintained
        objectFit="cover"
        className="w-full h-400px"
      />
      <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 bg-black opacity-50">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-white">Lincoln Mark VII Used Auto Parts</h2>
        <p className="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
              <div className='flex space-x-4'>
                  <Link href="/booking">
          <div className="mt-8 bg-transparent bg-blue-600 text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Request Parts
          </div>
        </Link><Link href="/booking">
          <div className="mt-8 bg-transparent bg-orange-600 text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Shop Now
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
