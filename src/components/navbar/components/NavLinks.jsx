import React from 'react'
import Link from 'next/link';

const NavLinks = ({ value, route, active, className }) => {
   return (
      <div className={`cursor-pointer text-primary  hover:text-secondary hover:font-bolder  ${className}`}>
         <Link className={`${active ? 'font-bolder' : ''}} truncate  cursor-pointer w-full `} href={route}>{value}</Link>
      </div>
   )
}

export default NavLinks