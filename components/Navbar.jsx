import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/carlogo.png'

// ... other imports

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Image src={Logo}
                          width={100}
                          height={80}
                          className="h-8"
                          alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lincoln Mark VII</span>
          </div>
              </Link>
              <div className='text-white'>+ 800-260-1901, info@lincolnmarkviiparts.com</div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          {/* ... burger menu button and hidden menu links ... */}
        
              </div>
      </div>
    </nav>
  );
}

export default Navbar;
