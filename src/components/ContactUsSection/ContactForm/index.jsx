'use client'

import { useRef, useState } from 'react'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'

export default function ContactForm() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmitFormData = (e) => {
    e.preventDefault()
    formRef.current.reset()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmitFormData} className={styles.formBlock}>
      <label htmlFor="name" className={styles.formBlockLabel}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleFormInput}
          required
          className={styles.formBlockInput}
        />
      </label>
      <label htmlFor="email" className={styles.formBlockLabel}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleFormInput}
          required
          className={styles.formBlockInput}
        />
      </label>
      <label htmlFor="phoneNumber" className={styles.formBlockLabel}>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleFormInput}
          required
          className={styles.formBlockInput}
        />
      </label>
      <label htmlFor="message" className={styles.formBlockLabel}>
        <textarea
          maxLength="150"
          rows="5"
          id="message"
          name="message"
          placeholder="Your Message"
          onChange={handleFormInput}
          className={styles.formBlockTextarea}
        />
      </label>
      <button about="submit form" className={styles.submitButton} type="submit" value="Submit">
        <span className={styles.buttonText}>Share Your Thoughts</span>
      </button>
    </form>
  )
}
