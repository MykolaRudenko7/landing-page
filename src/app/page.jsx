import Navbar from 'components/Navbar'
import StartHereSection from 'components/StartHereSection'
import WhoWeAre from 'components/WhoWeAreSection'
import ServicesSection from 'components/ServicesSection'
import PortfilioSection from 'components/PortfilioSection'
import ContactUsSection from 'components/ContactUsSection'
import Footer from 'components/Footer'
import styles from 'app/Home.module.scss'
import Switcher from 'components/Switcher'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar />
        <Switcher />
      </header>
      <main>
        <StartHereSection />
        <WhoWeAre />
        <ServicesSection />
        <PortfilioSection />
        <ContactUsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  )
}
