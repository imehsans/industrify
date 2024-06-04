import React from 'react'
import Link from 'next/link';
import Logo from '../../../assets/svgs/logoInds.svg'
import Image from 'next/image';

const LogoLink = () => {
   return (
      <div className="text-3xl text-center text-secondary sm:mb-0">
         <Link href="/">
            <Image className='w-full h-full' src={Logo} alt="logo" />
         </Link>
      </div>
   );
}
export default LogoLink