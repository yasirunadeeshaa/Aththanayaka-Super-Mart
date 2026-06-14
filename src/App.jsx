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

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'shop') {
    return (
      <>
        <Navbar />
        <ProductDetails onBack={() => setPage('home')} />
        <Footer />
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
      <AboutUs />
      <Delivary />
      <Wholesale />
      <Footer />
    </>
  )
}