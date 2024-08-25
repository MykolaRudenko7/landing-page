import dynamic from 'next/dynamic'
import IntroSection from 'components/IntroSection'
import ServicesSection from 'components/ServicesSection'
import PortfolioSection from 'components/PortfolioSection'
import ContactUsSection from 'components/ContactUsSection'
import AboutUsSection from 'components/AboutUsSection'
import ReviewsSection from 'components/ReviewsSection'
import WhyChooseSection from 'components/WhyChooseSection'
import styles from 'app/[locale]/Home.module.scss'

const NavbarSection = dynamic(() => import('components/Navbar'), {
  ssr: false,
})
const FooterSection = dynamic(() => import('components/Footer'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <NavbarSection />
      </header>
      <main>
        <IntroSection />
        <AboutUsSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <ReviewsSection />
        <ContactUsSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </main>
  )
}
