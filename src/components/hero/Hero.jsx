import React from 'react'

const Hero = ({ prrimary, secindary }) => {
   return (
      <div className='w-full relative hero bg-no-repeat bg-top  2xl:bg-cover  h-[90vh] lg:h-[48vh]  m-0 homeHero flex items-center justify-center'>
         <div className='absolute z-0 w-full h-full bg-opacity-10 bg-primary '></div>
         <h1 className='z-10 font-bold uppercase text-sm-xl lg:text-xl lg:font-bolder'>
            <span className='text-white'>
               {prrimary}
            </span> {' '}
            <span className='text-secondary'>
               {secindary}
            </span>
         </h1>
      </div>
   )
}

export default Hero