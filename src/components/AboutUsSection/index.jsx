'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'
import { useTranslations } from 'next-intl'
import { scrollSectionId } from 'data/scrollSectionId'
import aboutUsSectionImage from 'images/aboutUsSection/aboutUsImage.webp'
import styles from 'components/AboutUsSection/AboutUsSection.module.scss'

export default function AboutUsSection() {
  const { howWeAre, portfolio } = scrollSectionId

  const tAboutUs = useTranslations('AboutUsSection')
  const tButton = useTranslations('Buttons')
  const tLabel = useTranslations('SectionLabels')

  return (
    <section className={styles.aboutUs} id={howWeAre}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUsImageWrapper}>
          <Image
            alt="blockImage"
            className={styles.aboutUsImage}
            height={878}
            src={aboutUsSectionImage}
            width={771}
          />
        </div>
        <div className={styles.aboutUsTextBlock}>
          <div className={styles.aboutUsLabel}>
            <h3 className={styles.titleText}>{tLabel('aboutUsSection')}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.title}>{tAboutUs('title')}</h4>
            <p className={styles.text}>{tAboutUs('text')}</p>
          </div>
          <Link
            about={tButton('buttonPortfolio')}
            className={styles.aboutUsButton}
            duration={750}
            href="#"
            offset={-60}
            role="button"
            smooth={true}
            tabIndex="0"
            to={portfolio}
          >
            {tButton('buttonPortfolio')}
          </Link>
        </div>
      </div>
    </section>
  )
}
