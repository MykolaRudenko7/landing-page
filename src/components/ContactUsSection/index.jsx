'use client'

import Image from 'next/image'
import { contactUsSectionData } from 'data/contactUsSectionData'
import ContactForm from 'components/ContactUsSection/ContactForm'
import styles from 'components/ContactUsSection/ContactUsSection.module.scss'
import { useState } from 'react'

export default function ContactUsSection() {
  const { text, title, imageSrs } = contactUsSectionData

  return (
    <section id="contactUs" className={styles.contactUsSection}>
      <div className={styles.contactUsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.contactUsLabel}>
            <p className={styles.buttonText}>Contact Us</p>
          </div>
          <h5 className={styles.contactUsTilte}>{title}</h5>
          <p className={styles.contactUsText}>{text}</p>
        </div>
        <div className={styles.formImageWrapper}>
          <ContactForm />
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <Image alt="" src={imageSrs} className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
