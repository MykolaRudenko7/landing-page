'use client'

import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { whyChooseSectionData } from 'data/whyChooseSectionData'
import ScrollIdLink from 'shared/ScrollIdLink'
import WhyChooseCardItem from 'components/WhyChooseSection/WhyChooseCardItem'
import styles from 'components/WhyChooseSection/WhyChooseSection.module.scss'

export default function WhyChooseSection() {
  const tLabels = useTranslations('SectionLabels')
  const tSection = useTranslations('WhyChooseSection')
  const tButtons = useTranslations('Buttons')

  const label = tLabels('whyChooseSection')
  const title = tSection('mainCard.title')
  const text = tSection('mainCard.text')
  const buttonText = tButtons('buttonReady')

  const { cards, buttonSrc } = whyChooseSectionData

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseBlockWrapper}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardWrapper}>
            <div className={styles.buttonLabel}>
              <h3 className={styles.titleText}>{label}</h3>
            </div>
            <h4 className={styles.mainCardTitle}>{title}</h4>
            <p className={styles.mainCardText}>{text}</p>
            <ScrollIdLink about={buttonText} {...buttonSrc} variant={'buttonPrimary'}>
              {buttonText}
            </ScrollIdLink>
          </div>
        </div>
        <ul className={styles.smallCircles} role="list">
          {cards.map((item, id) => (
            <WhyChooseCardItem key={uuidv4()} {...item} cardId={id} />
          ))}
        </ul>
      </div>
    </section>
  )
}
