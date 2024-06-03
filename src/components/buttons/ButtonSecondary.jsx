import React from 'react'

const ButtonSecondary = ({ onClickFxn, value, className }) => {
   return (
      <div className='text-sm'>
         <button
            className={`hover:bg-secondary uppercase bg-primary  rounded py-[10px] text-white px-4 ${className}`}
            onClick={onClickFxn}
         >
            <span>
               {value}
            </span>
         </button>
      </div>
   )
}

export default ButtonSecondary