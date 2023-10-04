'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import { introSectionData } from 'data/introSectionData'
import IntroCardItem from 'components/IntroSection/IntroCardItem'
import styles from 'components/IntroSection/IntroSection.module.scss'

export default function Intro() {
  const { textBlock } = introSectionData
  const [isHoverCard, setIsHoverCard] = useState(null)

  return (
    <section className={styles.intro} id="home">
      <div className={styles.introContainer}>
        <div className={styles.textBlock}>
          <div className={styles.textBlockWrapper}>
            <h3 className={styles.textBlockTitle}>{textBlock.title}</h3>
            <p className={styles.textBlockText}>{textBlock.text}</p>
          </div>
          <div className={styles.buttonsBlock}>
            <Link
              about="schedule a consultation"
              className={styles.buttonConsultation}
              duration={750}
              href="#"
              offset={-10}
              role="button"
              smooth={true}
              tabIndex="0"
              to="contact"
            >
              Schedule a consultation
            </Link>
            <Link
              about="explore our services"
              className={styles.buttonServices}
              duration={750}
              href="#"
              offset={-10}
              role="button"
              smooth={true}
              tabIndex="0"
              to="services"
            >
              Explore our services
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            alt="start here block image"
            className={styles.image}
            loading="eager"
            src={textBlock.imageSrc}
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
