const ColoredTittle = ({ primary, secondary }) => {
   return (
      <>
         <h1 className='z-10 font-bold uppercase text-xlg md:text-sm-xl lg:text-xl md:font-bolder'>
            <span className='text-primary'>
               {primary}
            </span> {' '}
            <span className='text-secondary'>
               {secondary}
            </span>
         </h1>
      </>
   )
}

export default ColoredTittle