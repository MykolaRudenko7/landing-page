'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { scrollSectionId } from 'data/scrollSectionId'
import ContactForm from 'components/ContactUsSection/ContactForm'
import contactUsImage from 'images/contactUsSection/contactUs.png'
import styles from 'components/ContactUsSection/ContactUsSection.module.scss'

export default function ContactUsSection() {
  const { contact } = scrollSectionId

  const tContact = useTranslations('ContactUsSection')
  const tLabel = useTranslations('SectionLabels')
  const tTitle = tContact('title')
  const tText = tContact('text')

  return (
    <section className={styles.contactUsSection} id={contact}>
      <div className={styles.contactUsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.contactUsLabel}>
            <h3 className={styles.titleText}>{tLabel('contactUsSection')}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.contactUsTitle}>{tTitle}</h4>
            <p className={styles.contactUsText}>{tText}</p>
          </div>
        </div>
        <div className={styles.formImageWrapper}>
          <ContactForm />
          <div className={styles.imageBlock}>
            <Image alt="block image" className={styles.image} loading="lazy" src={contactUsImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
