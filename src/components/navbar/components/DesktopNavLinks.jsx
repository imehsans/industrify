'use client'
import React from 'react'
import Link from 'next/link';
import { FaBlog } from 'react-icons/fa6';
import NavLinks from './NavLinks';
import Image from 'next/image';
import Logo from '../../../assets/svgs/logoCenter.svg'
import LogoBack from '../../../assets/svgs/pentagon.svg'
import BrandTag from './BrandTag';
import { usePathname } from 'next/navigation';

const DesktopNavLinks = () => {
   const pathName = usePathname()
   return (
      <div className="relative flex items-center justify-between w-full text-sm font-medium">
         <div className='flex w-5/12'>
            <div className='w-1/3'>
               <NavLinks value="Home" route="/" className={"text-center"} />
            </div>
            <div className='w-1/3 '>
               <NavLinks value="About Us" route="/about" active={true} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Our Services" route="/services" active={false} className={"text-center"} />
            </div>
         </div>
         <BrandTag />
         <div className='flex w-5/12'>
            <div className='w-1/3'>
               <NavLinks value="Our Blog" route="/blogs" active={false} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Features" route="/features" active={false} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Contact Us" route="/contact" active={false} className={"text-center"} />
            </div>
         </div>
      </div >
   );
}

export default DesktopNavLinks