import Image from 'next/image'
import Link from 'next/link'
import { portfolioSectionData } from 'data/portfolioSectionData'
import styles from 'components/PortfilioSection/PortfolioBlock/PortfolioBlock.module.scss'
import PortfolioBlockCardItem from './PortfolioBlockCardItem'

export default function PortfolioBlock() {
  const {
    textBlock: { text, title },
    cards: { cardBarossa, cardFloraNow, cardB2B },
  } = portfolioSectionData.portfolioBlockData

  return (
    <div className={styles.portfolioBlock}>
      <div className={styles.portfolioBlockWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.portfolioLabel}>
              <span className={styles.titleText}>Portfolio</span>
            </h3>
            <h5 className={styles.textBlockTitle}>{title}</h5>
            <p className={styles.textBlockText}>{text}</p>
            <PortfolioBlockCardItem {...cardBarossa} />
          </div>
          <div className={styles.buttonWrapper}>
            <Link
              about="begin your project"
              className={styles.portfolioBlockButton}
              href="#"
              role="button"
              tabIndex="0"
            >
              <span className={styles.buttonText}>Begin Your Project</span>
            </Link>
          </div>
        </div>
        <div className={styles.cardsBlock}>
          <PortfolioBlockCardItem {...cardB2B} />
          <PortfolioBlockCardItem {...cardFloraNow} />
        </div>
      </div>
    </div>
  )
}
