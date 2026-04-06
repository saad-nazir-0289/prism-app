import { siteData } from './data/landingPage'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhyPrism from './sections/WhyPrism'
import Speakers from './sections/Speakers'
import Schedule from './sections/Schedule'
import Venue from './sections/Venue'
import Pricing from './sections/Pricing'
import Partners from './sections/Partners'
import Testimonials from './sections/Testimonials'
import Stats from './sections/Stats'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-app text-white">
      <div className="site-background" aria-hidden="true">
        <div className="ambient-left" />
        <div className="ambient-right" />
        <div className="ambient-bottom" />
      </div>

      <Navbar brand={siteData.brand} navLinks={siteData.navLinks} />

      <main className="relative z-10">
        <Hero data={siteData.hero} />
        <WhyPrism data={siteData.features} />
        <Speakers data={siteData.speakers} />
        <Schedule data={siteData.schedule} />
        <Venue data={siteData.venue} />
        <Pricing data={siteData.pricing} />
        <Partners data={siteData.partners} />
        <Testimonials data={siteData.testimonials} />
        <Stats data={siteData.stats} />
        <FinalCta data={siteData.finalCta} />
      </main>

      <Footer data={siteData.footer} brand={siteData.brand} />
    </div>
  )
}

export default App
