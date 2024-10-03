'use client'

import Image from 'next/image'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from 'next-intl'
import { introSectionData } from 'data/introSectionData'
import ScrollIdLink from 'shared/ScrollIdLink'
import IntroCardItem from 'components/IntroSection/IntroCardItem'
import { ScrollSectionId } from 'types/types'
import styles from 'components/IntroSection/IntroSection.module.scss'

export default function Intro() {
  const [isHoverCard, setIsHoverCard] = useState<number | null>(null)
  const { cards, imageSrc, buttonSchedule, buttonServices } = introSectionData

  const tIntro = useTranslations('IntroSection')
  const tButtons = useTranslations('Buttons')
  const tImages = useTranslations('Images')

  const title = tIntro('title')
  const text = tIntro('text')
  const buttonScheduleText = tButtons('buttonSchedule')
  const buttonServicesText = tButtons('buttonServices')
  const imageAlt = tImages('intro')

  return (
    <section className={styles.intro} id={ScrollSectionId.Home}>
      <div className={styles.introContainer}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.textBlockTitle}>{title}</h3>
            <p className={styles.textBlockText}>{text}</p>
          </div>
          <div className={styles.buttonsBlock}>
            <ScrollIdLink about={buttonScheduleText} {...buttonSchedule} variant={'buttonPrimary'}>
              {buttonScheduleText}
            </ScrollIdLink>
            <ScrollIdLink
              about={buttonServicesText}
              variant={'buttonSecondary'}
              {...buttonServices}
            >
              {buttonServicesText}
            </ScrollIdLink>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image alt={imageAlt} className={styles.image} {...imageSrc} priority />
        </div>
      </div>
      <div className={styles.cardsBlock}>
        <ul className={styles.cardsBlockContainer}>
          {cards.map((card, id) => (
            <IntroCardItem
              cardId={id}
              key={uuidv4()}
              {...card}
              isHoverCard={isHoverCard}
              setIsHoverCard={setIsHoverCard}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
