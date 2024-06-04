import React from 'react'

const Container = ({ children }) => {
   return (
      <div className='w-[95%] md:w-11/12 lg:w-11/12   mx-auto '>
         {children}
      </div>
   )
}

export default Container