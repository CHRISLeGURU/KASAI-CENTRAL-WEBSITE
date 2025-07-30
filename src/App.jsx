import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProvinceOverview from './components/ProvinceOverview'
import WhyDiscover from './components/WhyDiscover'
import SiteFeatures from './components/SiteFeatures'
import InteractiveMap from './components/InteractiveMap'
import Geography from './components/Geography'
import History from './components/History'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProvinceOverview />
      <WhyDiscover />
      <SiteFeatures />
      <InteractiveMap />
      <Geography />
      <History />
      <CTA />
    </div>
  )
}

export default App