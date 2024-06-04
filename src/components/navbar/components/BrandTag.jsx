import Image from 'next/image'
import React from 'react'
import Logo from '../../../assets/svgs/logoCenter.svg'
import LogoBack from '../../../assets/svgs/pentagon.svg'

const BrandTag = () => {
   return (
      <div className='relative z-10 inline-flex justify-center w-3/4 px-2 sm:w-full lg:w-2/12'>
         <div className=' absolute top-1 sm:top-[-10px]  lg:top-[-38px] text-secondary  text-xl' >
            <div className='relative w-full h-full'>
               <Image className='z-10 w-full h-full' src={LogoBack} alt='logo' />
               <Image className='absolute top-0 z-20 w-full h-full px-2 pb-2 animate-rotateY' src={Logo} alt='logo' />
            </div>
         </div>
      </div>
   )
}

export default BrandTag