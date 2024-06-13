import React, { useState } from 'react'
import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';
import ButtonLogin from '@/components/buttons/ButtonLogin';
import { Avatar } from '@nextui-org/avatar';
import Profile from '../../../assets/images/profile.png'
const MobileDrawer = ({ isOpen, onClose }) => {
   const [userName, setUserName] = useState("Osama Babar")
   const session = true
   const admin = true

   return (
      <div
         className={`fixed flex flex-col shadow pt-12  items-start  z-20 top-0 right-[100%] h-full w-5/6 sm:w-1/2 md:w-1/3 bg-primary text-white  transition-transform rounded-r-3xl duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
      >
         <div className='flex flex-col justify-between w-full h-full'>
            <div className='w-full'>
               <div className='flex items-center gap-5 px-3 pb-12'>
                  <div className='overflow-hidden w-28 rounded-3xl'>
                     <Avatar
                        squared
                        size='xl'
                        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                     />
                  </div>
                  <div>
                     <h1 className='text-md'>
                        {userName}
                     </h1>
                  </div>
               </div>
               <button className="absolute p-1 rounded bg-secondary right-7 top-4" onClick={onClose}>
                  <FaXmark className="text-xlg" />
               </button>
               <ul className="flex flex-col w-full divide-y divide-white ">

                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/">Home</Link>
                  </li>
                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/about">About Us</Link>
                  </li>
                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/services">Services</Link>
                  </li>
                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/features">Features</Link>
                  </li>
                  <li className="px-4 py-2 text-lg font-normal text-white hover:text-primary hover:bg-secondary hover:font-bolder">
                     <Link href="/blogs">Blogs</Link>
                  </li>

               </ul>
            </div>
            <div className='flex justify-center w-full pb-12 '>
               <ButtonLogin onClick={() => { }} value={"Login"} />
            </div>
         </div>
      </div>
   )
}

export default MobileDrawer