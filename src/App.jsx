import { useState } from 'react'

import Navbar from './pages/Navigation'
import Hero from './pages/HeroSection'
import Footer from './pages/Footer'
import Delivary from './pages/DelivaryPage'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Packaging from './pages/PackagingPage'
import Wholesale from './pages/WholesalePage'
import SesameRecipes from './pages/SesameRecipes'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <SesameRecipes />
      <Packaging />
      <AboutUs />
      <Delivary />
      <Wholesale />
      <Footer />
    </>
  )
}
