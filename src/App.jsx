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
import ProductDetails from './pages/ShopPage'

import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'shop') {
    return (
      <>
        <Navbar />
        <ProductDetails onBack={() => setPage('home')} />
        <Footer />
        <WhatsAppButton phone="94771234567" message="Hi! I'd like to ask about your sesame seeds and jaggery." />
      </>
    )
  }

  return (
    <>
      <Navbar onShopNow={() => setPage('shop')} />
      <Hero onShopNow={() => setPage('shop')} />
      <Products />
      <SesameRecipes />
      <Packaging />
      <Wholesale />
      <Delivary />
      <AboutUs />
      <Footer />
      <WhatsAppButton phone="94771234567" message="Hi! I'd like to ask about your sesame seeds and jaggery." />
    </>
  )
}