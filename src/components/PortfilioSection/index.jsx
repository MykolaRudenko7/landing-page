import PortfolioBlock from 'components/PortfilioSection/PortfolioBlock'
import WhyChooseBlock from 'components/PortfilioSection/WhyChooseBlock'
import TestimonialsBlock from 'components/PortfilioSection/TestimonialsBlock'

export default function PortfilioSection() {
  return (
    <section id="portfolio">
      <PortfolioBlock />
      <WhyChooseBlock />
      <TestimonialsBlock />
    </section>
  )
}
