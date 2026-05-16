import { PrismaHero } from './components/HeroPrisma'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import WhyUs from './components/WhyUs'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import PremiumServices from './components/PremiumServices'
import StylesVizSection from './components/StylesVizSection'
import CTA from './components/CTA'
import SeoContent from './components/SeoContent'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import AboutPage from './pages/AboutPage'
import MentionsLegalesPage from './pages/MentionsLegalesPage'
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage'
import PolitiqueCookiesPage from './pages/PolitiqueCookiesPage'
import CguPage from './pages/CguPage'
import NotFoundPage from './pages/NotFoundPage'
import SuccessPage from './pages/SuccessPage'

const path = window.location.pathname
const isAboutPage = path.startsWith('/a-propos')
const isMentionsLegales = path.startsWith('/mentions-legales')
const isPolitiqueConfidentialite = path.startsWith('/politique-confidentialite')
const isPolitiqueCookies = path.startsWith('/politique-cookies')
const isCgu = path.startsWith('/cgu')
const isSuccessPage = path === '/success.html' || path === '/success'
const isHomePage = path === '/' || path === ''

function PageContent() {
  if (isAboutPage) return <AboutPage />
  if (isMentionsLegales) return <MentionsLegalesPage />
  if (isPolitiqueConfidentialite) return <PolitiqueConfidentialitePage />
  if (isPolitiqueCookies) return <PolitiqueCookiesPage />
  if (isCgu) return <CguPage />
  if (isSuccessPage) return <SuccessPage />
  if (!isHomePage) return <NotFoundPage />

  return (
    <>
      <PrismaHero />
      <main>
        <Stats />
        <WhyUs />
        <Process />
        <StylesVizSection />
        <PremiumServices />
        <Gallery />
        <BeforeAfter />
        <Certifications />
        <Testimonials />
        <FAQ />
        <CTA />
        <SeoContent />
        <ContactForm />
      </main>
      <Services />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <PageContent />
      <CookieBanner />
    </>
  )
}
