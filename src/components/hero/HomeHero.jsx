import React from 'react'
import Container from '../container/Container'
import ButtonSecondary from '../buttons/ButtonSecondary'
import ButtonPrimary from '../buttons/ButtonPrimary'

const HomeHero = () => {
   const btnCalled = () => {

   }
   return (
      <div className='w-full hero bg-no-repeat bg-top  bg-cover h-[90vh]  m-0 homeHero flex items-center justify-center'>
         <Container>
            <div className='flex flex-col justify-center h-full mt-20 space-y-8 text-white textcenter items-centerl items'>

               <div className='w-1/2 mx-auto text-center '>
                  <h1 className='mx-auto text-xxl font-bolder'>Unlock Your Future
                     with Industrify</h1>

                  <p className='w-8/12 mx-auto text-lg'>Bridging the Gap Between Education and
                     Industry Experience
                  </p>
               </div>
               <div className='flex items-center justify-center'>
                  <ButtonPrimary onClickFxn={btnCalled} value={"Read Story"} className={"text-lg font-bolder px-24 py-5"} />
               </div>
            </div>
         </Container >
      </div >
   )
}

export default HomeHero