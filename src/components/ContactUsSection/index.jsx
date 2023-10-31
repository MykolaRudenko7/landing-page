'use client'

import Image from 'next/image'
import { contactUsSectionData } from 'data/contactUsSectionData'
import { scrollSectionId } from 'data/scrollSectionId'
import ContactForm from 'components/ContactUsSection/ContactForm'
import styles from 'components/ContactUsSection/ContactUsSection.module.scss'

export default function ContactUsSection() {
  const { contact } = scrollSectionId
  const { text, title, imageSrs } = contactUsSectionData

  return (
    <section className={styles.contactUsSection} id={contact}>
      <div className={styles.contactUsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.contactUsLabel}>
            <h3 className={styles.titleText}>Contact Us</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h5 className={styles.contactUsTitle}>{title}</h5>
            <p className={styles.contactUsText}>{text}</p>
          </div>
        </div>
        <div className={styles.formImageWrapper}>
          <ContactForm />
          <div className={styles.imageBlock}>
            <Image alt="" className={styles.image} src={imageSrs} />
          </div>
        </div>
      </div>
    </section>
  )
}
