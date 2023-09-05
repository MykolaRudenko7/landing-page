'use client'

import Image from 'next/image'
import { contactUsSectionData } from 'data/contactUsSectionData'
import ContactForm from 'components/ContactUsSection/ContactForm'
import styles from 'components/ContactUsSection/ContactUsSection.module.scss'

export default function ContactUsSection() {
  const { text, title, imageSrs } = contactUsSectionData

  return (
    <section className={styles.contactUsSection} id="contactUs">
      <div className={styles.contactUsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.contactUsLabel}>
            <h3 className={styles.buttonText}>Contact Us</h3>
          </div>
          <h5 className={styles.contactUsTilte}>{title}</h5>
          <p className={styles.contactUsText}>{text}</p>
        </div>
        <div className={styles.formImageWrapper}>
          <ContactForm />
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
<<<<<<< HEAD
              <Image alt="" className={styles.image} loading="eager" src={imageSrs} />
=======
              <Image loading="eager" alt="" src={imageSrs} className={styles.image} />
>>>>>>> 572dba4a5b3b383902c4a74e125e381b370139b8
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
