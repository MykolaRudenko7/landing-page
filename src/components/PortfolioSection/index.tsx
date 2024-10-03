'use client'

import { portfolioSectionData } from 'data/portfolioSectionData'
import { useTranslations } from 'next-intl'
import PortfolioBlockCardItem from 'components/PortfolioSection/PortfolioBlockCardItem'
import ScrollIdLink from 'shared/ScrollIdLink'
import { ScrollSectionId } from 'types/types'
import styles from 'components/PortfolioSection/PortfolioBlock.module.scss'

export default function PortfolioBlock() {
  const tLabels = useTranslations('SectionLabels')
  const tPortfolioSection = useTranslations('PortfolioSection')
  const tButtons = useTranslations('Buttons')

  const label = tLabels('portfolioSection')
  const title = tPortfolioSection('title')
  const text = tPortfolioSection('text')
  const buttonText = tButtons('buttonStart')

  const {
    cards: { card0, card1, card2 },
    buttonContact,
  } = portfolioSectionData

  return (
    <section className={styles.portfolioBlock} id={ScrollSectionId.Portfolio}>
      <div className={styles.portfolioBlockWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.portfolioLabel}>
              <span className={styles.titleText}>{label}</span>
            </h3>
            <div className={styles.textBlockForMargin}>
              <h4 className={styles.textBlockTitle}>{title}</h4>
              <p className={styles.textBlockText}>{text}</p>
            </div>
            <PortfolioBlockCardItem {...card0} cardId={0} />
          </div>
          <ScrollIdLink about={buttonText} {...buttonContact} hide={true} variant={'buttonPrimary'}>
            {buttonText}
          </ScrollIdLink>
        </div>
        <div className={styles.cardsBlock}>
          <PortfolioBlockCardItem {...card1} cardId={1} />
          <PortfolioBlockCardItem {...card2} cardId={2} />
        </div>
      </div>
    </section>
  )
}
