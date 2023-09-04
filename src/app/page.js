import Navbar from 'components/Navbar'
import StartHereSection from 'components/StartHereSection'
import WhoWeAre from 'components/WhoWeAreSection'
import ServicesSection from 'components/ServicesSection'
import PortfilioSection from 'components/PortfilioSection'
import ContactUsSection from 'components/ContactUsSection'
import Footer from 'components/Footer'
import styles from 'app/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <Navbar />
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
      </div>
    </main>
  )
}
