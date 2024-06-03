import Image from 'next/image'
import React from 'react'
import EmKing from '../../../assets/images/EmFooter.png'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
const ToSuccess = () => {
   return (
      <div className='relative px-20 pt-20'>
         <div className='absolute top-0 right-0 w-32 '>
            <Image className='w-full h-full' src={EmKing} alt='theme tag' />
         </div>
         <div className='w-full px-16 py-12 space-y-8 text-center rounded-2xl bg-secondary'>
            <div>
               <h1 className='px-5 text-xl font-bolder'>Ready to embark on your journey towards success? </h1>
               <p className='px-8 text-md'>Request a demo today and experience firsthand how Industrify can transform your educational experience and career prospects.
               </p>
            </div>
            <div>
               <ButtonSecondary onClick={() => { }} value={"Request A Demo"} className={"text-lg font-bolder py-6 px-8"} />
            </div>
         </div>
      </div>
   )
}

export default ToSuccess