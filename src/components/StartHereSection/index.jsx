import Link from 'next/link'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { startHereSectionData } from 'data/startHereSectionData'
import StartHereCardItem from 'components/StartHereSection/StartHereCardItem'
import styles from 'components/StartHereSection/StartHereSection.module.scss'

export default function StartHereSection() {
  const { textBlock } = startHereSectionData

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
              href="#"
              role="button"
              tabIndex="0"
            >
              <span className={styles.buttonText}>Schedule a consultation</span>
            </Link>
            <Link
              about="explore our services"
              className={styles.buttonServices}
              href="#"
              role="button"
              tabIndex="0"
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
          {startHereSectionData.cards.map((card) => (
            <StartHereCardItem key={uuidv4()} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
