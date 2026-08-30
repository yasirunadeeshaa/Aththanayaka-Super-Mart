import { Routes, Route, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Navbar from './pages/Navigation'
import Hero from './pages/HeroSection'
import Footer from './pages/Footer'
import Delivary from './pages/DelivaryPage'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Packaging from './pages/PackagingPage'
import Wholesale from './pages/WholesalePage'
import SesameRecipes from './pages/SesameRecipes'
import ShopPage from './pages/ShopPage'

import WhatsAppButton from './components/WhatsAppButton'
import FacebookButton from './components/FacebookButton'
import CallButton from './components/CallButton'

const WA_PHONE = '94771234567'
const WA_MESSAGE = "Hi! I'd like to ask about your sesame seeds and jaggery."
const SITE_URL = 'https://aththanayakasupermart.com'
const FB_PAGE_USERNAME = 'aththanayakasupermart'

// Real business details, matching what's shown on the Delivery page —
// keep these two places in sync if the address/hours/phone ever change.
const BUSINESS = {
  name: 'Aththanayaka Super Mart',
  phone: '+94786869743',
  address: 'No 48, Horana Road, Handapangoda',
  addressCountry: 'LK',
  latitude: 6.7902992,
  longitude: 80.1374571,
  openingHours: ['Tu-Su 09:00-18:00'], // Monday: closed
}

// LocalBusiness structured data (Schema.org / JSON-LD). This is what lets
// Google show your address, hours and phone number directly in search
// results and on Google Maps — rendered once, site-wide, since it
// describes the business itself rather than any one page.
function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GroceryStore',
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

// One title + description per real route. Kept in one place (rather than
// inside each shared section component) so the homepage — which stacks
// several of these sections together — only ever renders ONE <Helmet>,
// instead of five competing titles fighting to win.
const PAGE_META = {
  home: {
    path: '/',
    title: 'Aththanayaka Super Mart — Sesame Seeds, Jaggery & Packaging Supplies in Sri Lanka',
    description:
      "Sri Lanka's trusted supplier of black & white sesame seeds, organic jaggery, and packaging materials for sesame product manufacturers. Retail, wholesale and delivery available.",
  },
  shop: {
    path: '/shop',
    title: 'Shop Sesame Seeds & Jaggery Online | Aththanayaka Super Mart',
    description:
      'Browse and order sesame seeds, organic jaggery, and packaging supplies online from Aththanayaka Super Mart, with delivery across Sri Lanka.',
  },
  products: {
    path: '/products',
    title: 'Sesame Seeds & Organic Jaggery Products | Aththanayaka Super Mart',
    description:
      'Black sesame, white sesame, cleaned sesame and organic jaggery — every batch sourced and quality-checked in Sri Lanka.',
  },
  packaging: {
    path: '/packaging',
    title: 'Packaging Supplies for Sesame Manufacturers | Aththanayaka Super Mart',
    description:
      'Tissue paper, polythene covers, sealing rolls and paper bags for sesame product manufacturers across Sri Lanka.',
  },
  wholesale: {
    path: '/wholesale',
    title: 'Wholesale Sesame Seeds & Jaggery Supplier in Sri Lanka | Aththanayaka',
    description:
      'Bulk sesame seeds, jaggery and packaging materials at wholesale prices, with delivery available across Sri Lanka. Contact us for a quote.',
  },
  delivery: {
    path: '/delivery',
    title: 'Delivery & Visit Our Shop | Aththanayaka Super Mart',
    description:
      'Get your order delivered to your door, or visit our shop directly. Find our location, hours and delivery options here.',
  },
  about: {
    path: '/about',
    title: 'About Us | Aththanayaka Super Mart — 30+ Years in Business',
    description:
      "Sri Lanka's trusted supplier of sesame seeds, jaggery, and packaging materials for sesame product manufacturers, for over a decade.",
  },
}

// Renders the title/description/canonical tag for one page. meta comes
// from PAGE_META above, so every route's SEO tags live in one file.
function SEO({ meta }) {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`${SITE_URL}${meta.path}`} />
    </Helmet>
  )
}

// The homepage keeps the original long-scroll layout — all sections
// stacked on "/", reachable by anchor (#products, #wholesale, etc).
function HomePage({ onShopNow }) {
  return (
    <>
      <SEO meta={PAGE_META.home} />
      <Hero onShopNow={onShopNow} />
      <Products />
      <SesameRecipes />
      <Packaging />
      <Wholesale />
      <Delivary />
      <AboutUs />
    </>
  )
}

export default function App() {
  const navigate = useNavigate()
  const goToShop = () => navigate('/shop')
  const backToHome = () => navigate('/')

  return (
    <>
      <BusinessSchema />
      <Navbar onShopNow={goToShop} />

      <Routes>
        {/* Homepage — full stacked layout, unchanged UX */}
        <Route path="/" element={<HomePage onShopNow={goToShop} />} />

        {/* Real, standalone, indexable routes for every section.
            Each is now a shareable/bookmarkable URL search engines
            can crawl and rank independently, with its own title and
            meta description. */}
        <Route
          path="/shop"
          element={
            <>
              <SEO meta={PAGE_META.shop} />
              <ShopPage onBack={backToHome} />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <SEO meta={PAGE_META.products} />
              <Products />
            </>
          }
        />
        <Route
          path="/packaging"
          element={
            <>
              <SEO meta={PAGE_META.packaging} />
              <Packaging />
            </>
          }
        />
        <Route
          path="/wholesale"
          element={
            <>
              <SEO meta={PAGE_META.wholesale} />
              <Wholesale />
            </>
          }
        />
        <Route
          path="/delivery"
          element={
            <>
              <SEO meta={PAGE_META.delivery} />
              <Delivary />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <SEO meta={PAGE_META.about} />
              <AboutUs />
            </>
          }
        />

        {/* Fallback: unknown paths go home */}
        <Route path="*" element={<HomePage onShopNow={goToShop} />} />
      </Routes>

      <Footer />
      <WhatsAppButton phone={WA_PHONE} message={WA_MESSAGE} />
      <FacebookButton pageUsername={FB_PAGE_USERNAME} />
      <CallButton phone={`+${BUSINESS.phone.replace('+', '')}`} />
    </>
  )
}
