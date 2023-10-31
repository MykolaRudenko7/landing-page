import PortfolioBlock from 'components/PortfolioSection/PortfolioBlock'
import { scrollSectionId } from 'data/scrollSectionId'
import WhyChooseBlock from 'components/PortfolioSection/WhyChooseBlock'

export default function PortfolioSection() {
  const { portfolio } = scrollSectionId

  return (
    <section id={portfolio}>
      <PortfolioBlock />
      <WhyChooseBlock />
    </section>
  )
}
