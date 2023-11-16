'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { introSectionData } from 'data/introSectionData'
import { scrollSectionId } from 'data/scrollSectionId'
import IntroCardItem from 'components/IntroSection/IntroCardItem'
import introSectionImage from 'images/introSection/textBlock/introTextBlockImage.png'
import styles from 'components/IntroSection/IntroSection.module.scss'

export default function Intro() {
  const [isHoverCard, setIsHoverCard] = useState(null)
  const { home, contact, services } = scrollSectionId

  const tIntro = useTranslations('IntroSection')
  const tButton = useTranslations('Buttons')

  return (
    <section className={styles.intro} id={home}>
      <div className={styles.introContainer}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.textBlockTitle}>{tIntro('title')}</h3>
            <p className={styles.textBlockText}>{tIntro('text')}</p>
          </div>
          <div className={styles.buttonsBlock}>
            <Link
              about={tButton('buttonSchedule.about')}
              className={styles.buttonConsultation}
              duration={750}
              offset={-10}
              role="button"
              smooth={true}
              tabIndex="0"
              to={contact}
            >
              {tButton('buttonSchedule.label')}
            </Link>
            <Link
              about={tButton('buttonServices.about')}
              className={styles.buttonServices}
              duration={750}
              offset={-10}
              role="button"
              smooth={true}
              tabIndex="0"
              to={services}
            >
              {tButton('buttonServices.label')}
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            alt="intro block image"
            className={styles.image}
            src={introSectionImage}
            priority
          />
        </div>
      </div>
      <div className={styles.cardsBlock}>
        <div className={styles.cardsBlockContainer}>
          {introSectionData.cards.map((card, id) => (
            <IntroCardItem
              cardId={id}
              key={uuidv4()}
              {...card}
              isHoverCard={isHoverCard}
              setIsHoverCard={setIsHoverCard}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
