import Navbar from 'components/Navbar'
import IntroSection from 'components/IntroSection'
import ServicesSection from 'components/ServicesSection'
import PortfolioSection from 'components/PortfolioSection'
import ContactUsSection from 'components/ContactUsSection'
import AboutUsSection from 'components/AboutUsSection'
import ReviewsSection from 'components/ReviewsSection'
import WhyChooseSection from 'components/WhyChooseSection'
import Footer from 'components/Footer'
import styles from 'app/[locale]/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar />
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
        <Footer />
      </footer>
    </main>
  )
}
