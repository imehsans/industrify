import React from 'react'

const Container = ({ children }) => {
   return (
      <div className='container px-4 mx-auto xl:px-2 2xl:px-0'>
         {children}
      </div>
   )
}

export default Container