import Navbar from 'components/Navbar'
import IntroSection from 'components/IntroSection'
import ServicesSection from 'components/ServicesSection'
import PortfilioSection from 'components/PortfilioSection'
import ContactUsSection from 'components/ContactUsSection'
import AboutUsSection from 'components/AboutUsSection'
import Footer from 'components/Footer'
import styles from 'app/Home.module.scss'
import Switcher from 'components/Switcher'
import ReviewsSection from 'components/ReviewsSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar />
        <Switcher />
      </header>
      <main>
        <IntroSection />
        <AboutUsSection />
        <ServicesSection />
        <PortfilioSection />
        <ReviewsSection />
        <ContactUsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}
