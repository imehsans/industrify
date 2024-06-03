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

const Navbar = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const handleDrawerToggle = () => {
      setIsDrawerOpen(!isDrawerOpen);
   };

   return (
      <div className='sticky top-0 z-50 bg-white shadow'>
         <div className='py-4 text-white bg-primary'>
            <TopBar />
         </div>
         <Container >
            <div className="hidden relative  lg:flex uppercase  justify-between items-center h-[70px] ">
               <div className='w-1/6'>
                  <LogoLink />
               </div>
               <div className='w-7/12'>
                  <DesktopNavLinks />
               </div>
               <div className=''>
                  <ButtonPrimary onClick={() => { }} value={"Request for demo"} />
               </div>
            </div>
            <div className="lg:hidden h-[70px] py-4 relative flex flex-row items-center ">
               <LogoLink />
               <MobileMenuButton onClick={handleDrawerToggle} />
               <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
         </Container >

      </div>
   )
}

export default Navbar