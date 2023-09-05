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
    <form className={styles.formBlock} onSubmit={handleSubmitFormData} ref={formRef}>
      <label className={styles.formBlockLabel} htmlFor="name">
        <input
          className={styles.formBlockInput}
          id="name"
          name="name"
          onChange={handleFormInput}
          placeholder="Name"
          type="text"
          required
        />
      </label>
      <label className={styles.formBlockLabel} htmlFor="email">
        <input
          className={styles.formBlockInput}
          id="email"
          name="email"
          onChange={handleFormInput}
          placeholder="Email"
          type="email"
          required
        />
      </label>
      <label className={styles.formBlockLabel} htmlFor="phoneNumber">
        <input
          className={styles.formBlockInput}
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleFormInput}
          placeholder="Phone Number"
          type="tel"
          required
        />
      </label>
      <label className={styles.formBlockLabel} htmlFor="message">
        <textarea
          className={styles.formBlockTextarea}
          id="message"
          maxLength="150"
          name="message"
          onChange={handleFormInput}
          placeholder="Your Message"
          rows="5"
        />
      </label>
      <button
        about="submit form"
        className={styles.submitButton}
        tabIndex="0"
        type="submit"
        value="Submit"
      >
        <span className={styles.buttonText}>Share Your Thoughts</span>
      </button>
    </form>
  )
}
