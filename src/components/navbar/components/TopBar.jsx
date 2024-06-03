import ButtonLogin from '@/components/buttons/ButtonLogin'
import Container from '@/components/container/Container'
import React from 'react'
import { IoSearch } from "react-icons/io5";

const TopBar = () => {
   const handleLogin = () => {

   }
   return (
      <Container>
         <div className='flex items-center justify-between gap-8 md:justify-end text-md'>
            <div className='items-center hidden px-4 rounded sm:flex bg-Darkpurple '>
               <input className='px-2 py-1 bg-transparent outline-none text-secondary ring-0' type="text" placeholder='Search..' />
               <button ><IoSearch className='text-md' /></button>
            </div>
            <ButtonLogin onClick={handleLogin} value={"Login"} />
         </div>
      </Container>
   )
}

export default TopBar