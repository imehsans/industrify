import React from 'react'
import Link from 'next/link';
import { FaBlog } from 'react-icons/fa6';
import NavLinks from './NavLinks';
import Image from 'next/image';
import Logo from '../../../assets/svgs/logoCenter.svg'
import LogoBack from '../../../assets/svgs/pentagon.svg'

const DesktopNavLinks = () => {
   return (
      <div className="relative flex items-center justify-between w-full text-sm font-medium">
         <div className='w-1/5 '>
            <NavLinks value="About Us" route="/about" active={true} className={"text-center"} />
         </div>
         <div className='w-1/5'>
            <NavLinks value="Features" route="/features" active={false} className={"text-center"} />
         </div>
         <div className='inline-flex justify-center w-1/5 relatie'>
            <div className=' absolute top-[-27px] text-secondary  text-xl' >
               <div className='relative w-full h-full'>
                  <Image className='z-10 w-full h-full' src={LogoBack} alt='logo' />
                  <Image className='absolute top-0 z-20 w-full h-full px-2 pb-2' src={Logo} alt='logo' />
               </div>
            </div>
         </div>
         <div className='w-1/5'>
            <NavLinks value="Our Packages" route="/packages" active={false} className={"text-center"} />
         </div>
         <div className='w-1/5'>
            <NavLinks value="Contact Us" route="/contact" active={false} className={"text-center"} />
         </div>
      </div >
   );
}

export default DesktopNavLinks