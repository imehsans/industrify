import Container from '@/components/container/Container'
import Hero from '@/components/hero/Hero'
import TopSection from '@/components/sectiion/TopSection'
import React from 'react'

const FeaturePage = () => {
   return (
      <div>
         <Hero prrimary={""} secindary={""} />
         <Container>
            <TopSection brandTitle={''} primary={''} secondary={''} text={''} />
         </Container>

      </div>
   )
}

export default FeaturePage