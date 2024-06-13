"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ value, route, active, className }) => {
   const pathName = usePathname()
   return (
      <div className={`cursor-pointer  text-primary hover:text-secondary hover:font-bolder  ${className}`}>
         <Link className={`${pathName === route ? 'font-bolder  ' : ''}} truncate  cursor-pointer w-full `} href={route}>{value}</Link>

      </div>
   )
}

export default NavLinks