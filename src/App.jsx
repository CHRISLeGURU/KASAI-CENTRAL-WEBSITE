import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProvinceOverview from './components/ProvinceOverview'
import WhyDiscover from './components/WhyDiscover'
import SiteFeatures from './components/SiteFeatures'
import History from './components/History'
import Geography from './components/Geography'
import InteractiveMap from './components/InteractiveMap'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kasai-ivoire/30 to-white">
      <Navbar />
      <Hero />
      <ProvinceOverview />
      <WhyDiscover />
      <SiteFeatures />
      <History />
      <Geography />
      <InteractiveMap />
      <CTA />
    </div>
  )
}

export default App