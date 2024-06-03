import React from 'react'
import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';

const MobileDrawer = ({ isOpen, onClose }) => {
   return (
      <div
         className={`fixed flex flex-col shadow mt-16 pt-20  items-start px-3 z-10 top-0 right-0 h-full w-full sm:w-1/2 md:w-1/3 bg-white text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
      >
         <button className="absolute right-7 top-4 p-3" onClick={onClose}>
            <FaXmark className="text-xlg" />
         </button>
         <ul className="flex flex-col divide-y-2 divide-primary w-full ">
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/about">About Us</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/features">Features</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/packages">Our Packages</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/">Home</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/services">Services</Link>
            </li>
            <li className="text-lg text-primary hover:text-secondary hover:font-semibold py-2">
               <Link href="/blogs">Blogs</Link>
            </li>
            {/* Add other navigation links */}
         </ul>
      </div>
   )
}

export default MobileDrawer