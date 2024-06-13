import Container from '@/components/container/Container'
import Hero from '@/components/hero/Hero'
import TopSection from '@/components/sectiion/TopSection'
import React from 'react'

const ContactPage = () => {
   return (
      <div>
         <Hero prrimary={"Contact"} secindary={"Us"} />
         <Container>
            <TopSection brandTitle={'INDUSTRIFY'} primary={'Contact'} secondary={'us'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
         </Container>

      </div>
   )
}

export default ContactPage