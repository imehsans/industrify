import Image from 'next/image'
import React from 'react'
import EmKing from '../../../assets/images/EmFooter.png'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
const ToSuccess = () => {
   return (
      <div className='relative px-8 pt-8 md:px-16 md:pt-16 lg:px-20 lg:pt-20'>
         <div className='absolute top-0 right-0 w-14 md:w-24 lg:w-32 '>
            <Image className='w-full h-full' src={EmKing} alt='theme tag' />
         </div>
         <div className='w-full py-12 space-y-8 text-center lg:px-16 rounded-2xl bg-secondary'>
            <div>
               <h1 className='px-5 text-xlg lg:text-xl font-bolder '>Ready to embark on your journey towards success? </h1>
               <p className='px-4 lg:px-8 text-xxs md:text-xs lg:text-md '>Request a demo today and experience firsthand how Industrify can transform your educational experience and career prospects.
               </p>
            </div>
            <div>
               <ButtonSecondary onClick={() => { }} value={"Request A Demo"} className={"text-xs lg:text-lg font-bold lg:font-bolder py-[17px] px-[23px] lg:py-6 lg:px-8"} />
            </div>
         </div>
      </div>
   )
}

export default ToSuccess