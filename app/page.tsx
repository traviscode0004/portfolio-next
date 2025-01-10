'use client'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PortfolioSection from './components/PortfolioSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SkillsSection from './components/SkillsSection'

export default function HomePage() {
  
  return (
    <>
      <Navbar />
      <HeroSection />
       <FeaturesSection />
     <PortfolioSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection /> 
      <Footer />
    </>
  )
}
