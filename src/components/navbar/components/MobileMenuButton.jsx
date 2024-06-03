import React from 'react'
import { FaBars } from 'react-icons/fa6';

const MobileMenuButton = ({ onClick }) => {
   return (
      <button className="absolute right-1 top-2 py-4 " onClick={onClick}>
         <FaBars className="text-2xl " />
      </button>
   );
}

export default MobileMenuButton