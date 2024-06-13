import Container from '@/components/container/Container'
import Hero from '@/components/hero/Hero'
import TopSection from '@/components/sectiion/TopSection'
import React from 'react'

const ServicesPage = () => {
   return (
      <div>
         <Hero prrimary={"Our"} secindary={"Services"} />
         <Container>
            <TopSection
               brandTitle={'INDUSTRIFY'}
               primary={'Work-Based'}
               secondary={'Training Program'}
               text={'Welcome to our transformative Work-Based Training (WBT) program, where we forge strong connections between students, educational institutions, and industries, creating a mutually beneficial environment for all.'} />
         </Container>
      </div>
   )
}

export default ServicesPage