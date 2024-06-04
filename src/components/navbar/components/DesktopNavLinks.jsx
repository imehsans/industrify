import React from 'react'
import Link from 'next/link';
import { FaBlog } from 'react-icons/fa6';
import NavLinks from './NavLinks';
import Image from 'next/image';
import Logo from '../../../assets/svgs/logoCenter.svg'
import LogoBack from '../../../assets/svgs/pentagon.svg'
import BrandTag from './BrandTag';

const DesktopNavLinks = () => {
   return (
      <div className="relative flex items-center justify-between w-full text-sm font-medium">
         <div className='flex w-5/12'>
            <div className='w-1/3'>
               <NavLinks value="Home" route="/features" active={false} className={"text-center"} />
            </div>
            <div className='w-1/3 '>
               <NavLinks value="About Us" route="/about" active={true} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Our Services" route="/features" active={false} className={"text-center"} />
            </div>
         </div>
         <BrandTag />
         {/* <div className='inline-flex justify-center w-2/12 relatie'>
            <div className=' absolute top-[-26px] text-secondary  text-xl' >
               <div className='relative w-full h-full'>
                  <Image className='z-10 w-full h-full' src={LogoBack} alt='logo' />
                  <Image className='absolute top-0 z-20 w-full h-full px-2 pb-2' src={Logo} alt='logo' />
               </div>
            </div>
         </div> */}
         <div className='flex w-5/12'>
            <div className='w-1/3'>
               <NavLinks value="Our Blog" route="/packages" active={false} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Features" route="/packages" active={false} className={"text-center"} />
            </div>
            <div className='w-1/3'>
               <NavLinks value="Contact Us" route="/contact" active={false} className={"text-center"} />
            </div>

         </div>
      </div >
   );
}

export default DesktopNavLinks