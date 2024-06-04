import React from 'react'
import { FaBars } from 'react-icons/fa6';

const MobileMenuButton = ({ onClick }) => {
   return (
      <button className="py-4 top-2" onClick={onClick}>
         <FaBars className="text-2xl " />
      </button>
   );
}

export default MobileMenuButton