'use client'
import React, { useState } from 'react';
import LogoLink from './components/LogoLink';
import DesktopNavLinks from './components/DesktopNavLinks';
import MobileMenuButton from './components/MobileMenuButton';
import MobileDrawer from './components/MobileDrawer';
import Container from '../container/Container';
import ReqButton from './components/ReqButton';
import TopBar from './components/TopBar';
import ButtonPrimary from '../buttons/ButtonPrimary';
import BrandTag from './components/BrandTag';

const Navbar = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(true);

   const handleDrawerToggle = () => {
      setIsDrawerOpen(!isDrawerOpen);
   };

   return (
      <div className='sticky top-0 z-50 bg-white shadow'>
         <div className='hidden py-4 text-white lg:block bg-primary'>
            <TopBar />
         </div>
         <Container>
            <div className="hidden relative  lg:flex uppercase  justify-between items-center h-[70px] ">
               <div className=''>
                  <LogoLink />
               </div>
               <div className='w-8/12'>
                  <DesktopNavLinks />
               </div>
               <div className=''>
                  <ButtonPrimary onClick={() => { }} value={"Request for demo"} className={'font-semibold text-xs px-2 py-3 '} />
               </div>
            </div>
            <div className="lg:hidden h-[70px] py-4 relative justify-between flex flex-row items-center ">
               <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
               <div className='flex w-1/2 gap-16 sm:w-2/3'>
                  <MobileMenuButton onClick={handleDrawerToggle} />
                  {/* <LogoLink /> */}
                  <div className='flex items-center w-1/3 h-full '>
                     <BrandTag />
                  </div>

               </div>
               <div className=''>
                  <ButtonPrimary onClick={() => { }} value={"Request for demo"} className={'font-semibold text-xxs px-2 py-2 '} />
               </div>
            </div>
         </Container >

      </div>
   )
}

export default Navbar