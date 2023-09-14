'use client'

import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import { startHereSectionData } from 'data/startHereSectionData'
import StartHereCardItem from 'components/StartHereSection/StartHereCardItem'
import styles from 'components/StartHereSection/StartHereSection.module.scss'

export default function StartHereSection() {
  const { textBlock } = startHereSectionData
  const [isHoverCard, setIsHoverCard] = useState(null)

  return (
    <section className={styles.startHere} id="startHere">
      <div className={styles.startHereContainer}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>{textBlock.title}</h3>
          <p className={styles.textBlockText}>{textBlock.text}</p>
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
              to="contactUs"
            >
              <span className={styles.buttonText}>Schedule a consultation</span>
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
              <span className={styles.buttonText}>Explore our services</span>
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
          {startHereSectionData.cards.map((card, id) => (
            <StartHereCardItem
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
