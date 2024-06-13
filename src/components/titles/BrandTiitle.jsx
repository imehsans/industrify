import React from 'react'
import TitleTop from '../../assets/svgs/titleTop.svg'
import Image from 'next/image'

const BrandTiitle = ({ children }) => {
   return (
      <div className='flex flex-col items-center'>
         <Image className='w-[41px] md:w-[53px] lg:w-[65px]' src={TitleTop} alt='Title Top image' />
         <h1 className='font-bold uppercase md:text-xmd lg:text-lg md:font-bolder text-secondary text-md'>{children}</h1>
      </div>
   )
}

export default BrandTiitle