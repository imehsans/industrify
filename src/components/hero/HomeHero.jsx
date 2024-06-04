import React from 'react'
import Container from '../container/Container'
import ButtonSecondary from '../buttons/ButtonSecondary'
import ButtonPrimary from '../buttons/ButtonPrimary'

const HomeHero = () => {
   const btnCalled = () => {

   }
   return (
      <div className='w-full hero bg-no-repeat bg-top bg-cover xl:bg-contain 2xl:bg-cover  h-[60vh] lg:h-[90vh]  m-0 homeHero flex items-center justify-center'>
         <Container>
            <div className='flex flex-col items-center justify-center h-full mt-20 space-y-8 text-white textcenter items'>
               <div className='flex flex-col items-center justify-center text-center mx-autoto xl:w-2/3 '>
                  <h1 className='mx-auto tracking-wide uppercase lg:tracking-wider text-xlg md:text-xl lg:text-xxl font-bolder'>Unlock Your Future
                     with Industrify</h1>

                  <p className='w-5/6 text-xxs md:text-md xl:text-lg mx:-auto md:w-2/3 xl:w-1/2'>Bridging the Gap Between Education and Industry Experience
                  </p>
               </div>
               <div className='flex items-center justify-center'>
                  <ButtonPrimary onClickFxn={btnCalled} value={"Read Story"} className={"text-xs md:text-xmd xl:text-lg font-medium md:font-bold xl:font-bolder px-4 md:px-6 xl:px-8 py-2 md:py-3 xl:py-5"} />
               </div>
            </div>
         </Container >
      </div >
   )
}

export default HomeHero