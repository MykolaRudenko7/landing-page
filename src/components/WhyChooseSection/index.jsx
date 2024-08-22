'use client'

import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { scrollSectionId } from 'data/scrollSectionId'
import { whyChooseSectionData } from 'data/whyChooseSectionData'
import WhyChooseCardItem from 'components/WhyChooseSection/WhyChooseCardItem'
import styles from 'components/WhyChooseSection/WhyChooseSection.module.scss'

export default function WhyChooseSection() {
  const tLabel = useTranslations('SectionLabels')
  const tSection = useTranslations('WhyChooseSection')
  const tButton = useTranslations('Buttons')

  const { cards } = whyChooseSectionData
  const { contact } = scrollSectionId

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseBlockWrapper}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardWrapper}>
            <div className={styles.buttonLabel}>
              <h3 className={styles.titleText}>{tLabel('whyChooseSection')}</h3>
            </div>
            <h4 className={styles.mainCardTitle}>{tSection('mainCard.title')}</h4>
            <p className={styles.mainCardText}>{tSection('mainCard.text')}</p>
            <Link
              about={tButton('buttonReady')}
              className={styles.elevateButton}
              duration={750}
              href="#"
              offset={-60}
              role="button"
              smooth={true}
              tabIndex="0"
              to={contact}
            >
              {tButton('buttonReady')}
            </Link>
          </div>
        </div>
        <div className={styles.smallCircles}>
          {cards.map((item, id) => (
            <WhyChooseCardItem key={uuidv4()} {...item} cardId={id} />
          ))}
        </div>
      </div>
    </section>
  )
}
