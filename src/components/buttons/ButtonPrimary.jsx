import React from 'react'

const ButtonPrimary = ({ onClickFxns, value, className }) => {
   return (
      <div className='text-sm'>
         <button
            className={`bg-secondary uppercase hover:bg-primary  rounded py-[10px] text-white px-4 ${className}`}
            onClick={onClickFxns}
         >
            <span>
               {value}
            </span>
         </button>
      </div>
   )
}

export default ButtonPrimary