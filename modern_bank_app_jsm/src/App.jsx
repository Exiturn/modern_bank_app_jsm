import React from 'react'
import style from './style.js'

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials,
Clients, CTA, Footer } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-x-hidden'>
      
      {/* Navbar */}
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Content */}
      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer /> 
        </div>
      </div>
    </div>
  )
}

export default App