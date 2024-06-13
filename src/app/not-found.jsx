import Container from '@/components/container/Container'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
   return (
      <div className='h-[60vh]  w-full flex flex-col justify-center items-start'>
         <Container>
            <div className='grid grid-cols-1 space-y-4'>
               <div>
                  <h1 className='text-xl text-center text-secondary'>Not Found</h1>
               </div>
               <div>
                  <p className='text-lg text-center text-primary'>Sorry, The page you are looking for does not exist.</p>
               </div>
               <div></div>
               <Link className='p-2 mx-auto font-bold text-center border-2 rounded-md border-secondary hover:bg-secondary hover:text-white text-primary' href={"/"}>Return Home</Link>
            </div>
         </Container>
      </div>
   )
}

export default NotFound