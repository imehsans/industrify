import Container from '@/components/container/Container'
import Hero from '@/components/hero/Hero'
import Section from '@/components/sectiion/Section'
import TopSection from '@/components/sectiion/TopSection'
import Image from 'next/image'
import React from 'react'
import SectionImage from '../../assets/images/storyImage.png'
import RightCrown from '../../assets/svgs/rightcrown.svg'
import LeftCrown from '../../assets/svgs/leftCrown.svg'
import ColoredTittle from '@/components/titles/ColoredTittle'

const AboutPage = () => {
   return (
      <div>
         <Hero prrimary={"about"} secindary={"us"} />
         <Container>
            <Section>
               <TopSection
                  brandTitle={'INDUSTRIFY'}
                  primary={'OUR'}
                  secondary={'STORY'}
                  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                  className={"w-11/12 xl:px-16 mx-auto"}
               />
            </Section>

            <Section>
               <div className='relative flex items-center w-11/12 mx-auto'>
                  <div className='z-0 w-1/2'>
                     <Image src={SectionImage} alt='banner' />
                  </div>
                  <div className='absolute right-0 z-10 w-3/5 p-10 text-center bg-white shadow-xl rounded-xl'>
                     <div className='relative w-full h-full'>
                        <div className='absolute bottom-full right-[-130px] '>
                           <Image className='' src={RightCrown} alt="RightCrown" />
                        </div>
                        <ColoredTittle primary={'Our'} secondary={"Vision"} />
                        <p className='text-md'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                     </div>
                  </div>
               </div>
            </Section>
            <Section>
               <div className='relative flex items-center justify-end w-11/12 mx-auto '>
                  <div className='absolute left-0 z-10 w-3/5 p-10 text-center bg-white shadow-xl rounded-xl'>
                     <div className='relative' >
                        <div className='absolute hidden lg:block left-[-130px] z-10 bottom-full'>
                           <Image src={LeftCrown} alt="LeftCrown" />
                        </div>
                        <ColoredTittle primary={'Our'} secondary={"Vision"} />
                        <p className='text-md'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                     </div>
                  </div>
                  <div className='z-0 w-1/2'>
                     <Image src={SectionImage} alt='banner' />
                  </div>

               </div>
            </Section>

         </Container>

      </div>
   )
}

export default AboutPage