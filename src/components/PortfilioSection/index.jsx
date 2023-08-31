import PortfolioBlock from 'components/PortfilioSection/PortfolioBlock'
import WhyChooseBlock from 'components/PortfilioSection/WhyChooseBlock'
import TestimonialsBlock from 'components/PortfilioSection/TestimonialsBlock'
import styles from 'components/PortfilioSection/PortfilioSection.module.scss'

export default function PortfilioSection() {
  return (
    <section id="portfolio" className={styles.portfilioSection}>
      <PortfolioBlock />
      <WhyChooseBlock />
      <TestimonialsBlock />
    </section>
  )
}
