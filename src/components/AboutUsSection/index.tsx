'use client'

import Image from 'next/image'
import { Button } from 'react-scroll'
import { useTranslations } from 'next-intl'
import { aboutUsSectionData } from 'data/aboutUsSectionData'
import { ScrollSectionId } from 'types/types'
import styles from 'components/AboutUsSection/AboutUsSection.module.scss'

export default function AboutUsSection() {
  const { imageSrs, buttonSrc } = aboutUsSectionData

  const tAboutUs = useTranslations('AboutUsSection')
  const tButtons = useTranslations('Buttons')
  const tLabels = useTranslations('SectionLabels')
  const tImages = useTranslations('Images')

  const label = tLabels('aboutUsSection')
  const title = tAboutUs('title')
  const text = tAboutUs('text')
  const imageAlt = tImages('aboutUs')
  const buttonText = tButtons('buttonPortfolio')

  return (
    <section className={styles.aboutUs} id={ScrollSectionId.HowWeAre}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUsImageWrapper}>
          <Image alt={imageAlt} className={styles.aboutUsImage} loading="lazy" {...imageSrs} />
        </div>
        <div className={styles.aboutUsTextBlock}>
          <div className={styles.aboutUsLabel}>
            <h3 className={styles.titleText}>{label}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
          </div>
          <Button about={buttonText} className={styles.aboutUsButton} role="button" {...buttonSrc}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
