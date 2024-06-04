import React from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import footerLogo from '../../assets/svgs/footerLogo.svg'
import ButtonPrimary from '../buttons/ButtonPrimary'
import NavLinks from '../navbar/components/NavLinks'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { TfiYoutube } from "react-icons/tfi";
import ToSuccess from './components/ToSuccess'

const Footer = () => {
   const handleAccounts = () => { }
   return (
      <div className='w-full mt-auto space-y-24 text-md'>
         <Container>
            <ToSuccess />
         </Container>
         <Container>
            <div className='flex flex-wrap justify-between w-full space-y-6 lg:space-y-0'>
               <div className='flex flex-col mx-auto space-y-4 sm:items-center sm:w-1/2 sm:text-center lg:items-start lg:text-start lg:w-4/12 lg:pe-4'>
                  <Image className='' src={footerLogo} alt='logo' />
                  <p>we blend the timeless elegance of England with innovative approaches to education and career development.</p>
               </div>
               <div className='flex flex-wrap justify-between w-full uppercase lg:w-8/12'>
                  <div className='w-4/12 mx-auto space-y-4 lg:w-2/12'>
                     <div className='w-full text-xs text-start md:text-center lg:text-start'>
                        <strong className='pb-3'>Universities</strong>
                     </div>
                     <div className='space-y-2 '>
                        <NavLinks value={"Students"} route={'/'} active={false} className={"text-start md:text-center lg:text-start  text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Events"} route={'/'} active={false} className={"text-start md:text-center lg:text-start  text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Gallery"} route={'/'} active={false} className={"text-start text-xxs md:text-xs font-normal md:text-center lg:text-start"} />
                        <NavLinks value={"News"} route={'/'} active={false} className={"text-start md:text-center text-xxs md:text-xs font-normal lg:text-start"} />
                     </div>
                  </div>
                  <div className='w-4/12 space-y-4 lg:w-2/12'>
                     <div className='w-full text-xs text-start md:text-center lg:text-start'>
                        <strong className=''>ALUMNI</strong>
                     </div>
                     <div className='space-y-2 '>
                        <NavLinks value={"Contacts"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Career"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"About us"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Apply to Job"} route={'/'} active={false} className={"text-start text-xxs md:text-xs font-normal md:text-center lg:text-start"} />
                     </div>
                  </div>
                  <div className='w-4/12 mx-auto space-y-4 md:pt-0 lg:w-2/12'>
                     <div className='w-full text-xs text-start md:text-center lg:text-start'>
                        <strong className='w-full pb-3 '>Acconunt</strong>
                     </div>
                     <div className='space-y-2 '>
                        <NavLinks value={"Profile"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Stories"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Password"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                        <NavLinks value={"Downloads"} route={'/'} active={false} className={"text-start md:text-center lg:text-start text-xxs md:text-xs font-normal"} />
                     </div>
                  </div>
                  <div className='flex flex-col items-center w-full pt-6 space-y-8 lg:pt-0 lg:w-5/12'>
                     <div>
                        <ButtonPrimary onClick={handleAccounts} value={"Industrify Account"} className={'text-lg font-bolder !py-6 px-8'} />
                     </div>
                     <div className='flex items-center space-x-4 text-primary text-[28px] '>
                        <div className='cursor-pointer hover:text-secondary '>
                           <FaFacebookF />
                        </div>
                        <div className='cursor-pointer hover:text-secondary '>
                           <FaTwitter />
                        </div>
                        <div className='cursor-pointer hover:text-secondary '>
                           <TfiYoutube />
                        </div>
                        <div className='cursor-pointer hover:text-secondary '>
                           <FaLinkedinIn />
                        </div>
                        <div className='cursor-pointer hover:text-secondary '>
                           <FaInstagram />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
         <div className='py-2 text-center text-white text-md bg-primary'>
            ©2024 Industrify
         </div>
      </div>
   )
}

export default Footer