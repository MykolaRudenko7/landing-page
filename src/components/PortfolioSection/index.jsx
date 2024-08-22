'use client'

import { Link } from 'react-scroll'
import { portfolioSectionData } from 'data/portfolioSectionData'
import { useTranslations } from 'next-intl'
import PortfolioBlockCardItem from 'components/PortfolioSection/PortfolioBlockCardItem'
import { scrollSectionId } from 'data/scrollSectionId'
import styles from 'components/PortfolioSection/PortfolioBlock.module.scss'

export default function PortfolioBlock() {
  const { contact, portfolio } = scrollSectionId

  const tLabel = useTranslations('SectionLabels')
  const tPortfolioSection = useTranslations('PortfolioSection')
  const tButton = useTranslations('Buttons')

  const {
    cards: { card0, card1, card2 },
  } = portfolioSectionData

  return (
    <section className={styles.portfolioBlock} id={portfolio}>
      <div className={styles.portfolioBlockWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.portfolioLabel}>
              <span className={styles.titleText}>{tLabel('portfolioSection')}</span>
            </h3>
            <div className={styles.textBlockForMargin}>
              <h4 className={styles.textBlockTitle}>{tPortfolioSection('title')}</h4>
              <p className={styles.textBlockText}>{tPortfolioSection('text')}</p>
            </div>
            <PortfolioBlockCardItem {...card0} cardId={0} />
          </div>
          <Link
            about={tButton('buttonStart')}
            className={styles.portfolioBlockButton}
            duration={750}
            href="#"
            offset={-60}
            role="button"
            smooth={true}
            tabIndex="0"
            to={contact}
          >
            {tButton('buttonStart')}
          </Link>
        </div>
        <div className={styles.cardsBlock}>
          <PortfolioBlockCardItem {...card1} cardId={1} />
          <PortfolioBlockCardItem {...card2} cardId={2} />
        </div>
      </div>
    </section>
  )
}
