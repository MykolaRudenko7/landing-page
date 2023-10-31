'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'
import { aboutUsSectionData } from 'data/aboutUsSectionData'
import { scrollSectionId } from 'data/scrollSectionId'
import styles from 'components/AboutUsSection/AboutUsSection.module.scss'

export default function AboutUsSection() {
  const { howWeAre, portfolio } = scrollSectionId
  const { imageSrc, text, title } = aboutUsSectionData

  return (
    <section className={styles.aboutUs} id={howWeAre}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUsImageWrapper}>
          <Image
            alt="blockImage"
            className={styles.aboutUsImage}
            height={878}
            src={imageSrc}
            width={771}
          />
        </div>
        <div className={styles.aboutUsTextBlock}>
          <div className={styles.aboutUsLabel}>
            <h3 className={styles.titleText}>About us</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
          </div>
          <Link
            about="boost your business!"
            className={styles.aboutUsButton}
            duration={750}
            href="#"
            offset={-10}
            role="button"
            smooth={true}
            tabIndex="0"
            to={portfolio}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
