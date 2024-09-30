'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ContactForm from 'components/ContactUsSection/ContactForm'
import { contactUsSectionData } from 'data/contactUsSectionData'
import { ScrollSectionId } from 'types/types'
import styles from 'components/ContactUsSection/ContactUsSection.module.scss'

export default function ContactUsSection() {
  const { imageSrc } = contactUsSectionData

  const tContact = useTranslations('ContactUsSection')
  const tLabels = useTranslations('SectionLabels')
  const tImages = useTranslations('Images')

  const label = tLabels('contactUsSection')
  const title = tContact('title')
  const text = tContact('text')
  const imageAlt = tImages('contactUs')

  return (
    <section className={styles.contactUsSection} id={ScrollSectionId.Contact}>
      <div className={styles.contactUsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.contactUsLabel}>
            <h3 className={styles.titleText}>{label}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.contactUsTitle}>{title}</h4>
            <p className={styles.contactUsText}>{text}</p>
          </div>
        </div>
        <div className={styles.formImageWrapper}>
          <ContactForm />
          <div className={styles.imageBlock}>
            <Image alt={imageAlt} className={styles.image} loading="lazy" {...imageSrc} />
          </div>
        </div>
      </div>
    </section>
  )
}
