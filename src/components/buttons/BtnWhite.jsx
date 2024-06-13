
const BtnWhite = ({ onClickFxns, value, className }) => {
   return (
      <div className='text-sm'>
         <button
            className={`hover:bg-secondary border shadow rounded-lg bg-white text-primary   hover:text-white  ${className}`}
            onClick={onClickFxns}
         >
            <span className="my-1">
               {value}
            </span>
         </button>
      </div>
   )
}

export default BtnWhite