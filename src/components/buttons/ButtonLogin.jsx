import React from 'react'

const ButtonLogin = ({ onClick, value }) => {
   return (
      <button
         className='px-4 py-1 rounded-sm text-md bg-purple hover:bg-secondary'
         onClick={() => onClick()}
      >{value}</button>
   )
}

export default ButtonLogin