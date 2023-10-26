'use client'

import { useId } from 'react'
import cn from 'classnames'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'
import CreatableSelect from 'react-select/creatable'
import { contactCountryOptions } from 'data/contactUsSectionData'

export default function ContactForm() {
  const contactFormId = useId()
  const firstNameInputId = useId()
  const lastNameInputId = useId()
  const emailInputId = useId()
  const phoneNumberInputId = useId()
  const marketToContactSelectId = useId()
  const yourMessageTextareaId = useId()

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      fontSize: '14px',
      padding: '5px',
      borderRadius: '10px',
      backgroundColor: '#d9d9d956',
      backdropFilter: 'blur(45px)',
      border: '2px solid transparent',
      boxShadow: 'none',
      '&:hover': {
        border: '2px solid white',
      },
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: '#3a3d60',
      fontSize: '14px',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      zIndex: '5',
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: '#fff',
      opacity: '0.5',
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: '#fff',
    }),
    singleValue: (baseStyles) => ({ ...baseStyles, color: '#fff' }),
  }

  return (
    <form className={styles.formBlock} id={contactFormId}>
      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={firstNameInputId}
          name="firstName"
          tabIndex="0"
          type="text"
          required
        />
        <label className={styles.label} htmlFor={firstNameInputId}>
          Name
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={lastNameInputId}
          name="lastName"
          tabIndex="0"
          type="text"
          required
        />
        <label className={styles.label} htmlFor={lastNameInputId}>
          Last Name
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          name="email"
          tabIndex="0"
          type="email"
          required
        />
        <label className={styles.label} htmlFor={emailInputId}>
          E-mail
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={phoneNumberInputId}
          name="phone"
          tabIndex="0"
          type="tel"
          required
        />
        <label className={styles.label} htmlFor={phoneNumberInputId}>
          Phone Number
        </label>
      </div>

      <div className={cn(styles.inputContainerSelect, styles.inputContainer)}>
        <CreatableSelect
          id={marketToContactSelectId}
          isCreatable={true}
          isSearchable={true}
          name="country"
          options={contactCountryOptions}
          placeholder={'Market to contact'}
          styles={customStyles}
          tabIndex="0"
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <textarea
          autoComplete="on"
          className={cn(styles.input, styles.textarea)}
          id={yourMessageTextareaId}
          name="message"
          rows="5"
          tabIndex="0"
          required
        ></textarea>
        <label className={styles.label} htmlFor={yourMessageTextareaId}>
          Your message
        </label>
      </div>

      <button aria-label="submit" className={styles.submitButton} tabIndex="0" type="submit">
        Submit Your Idea
      </button>
    </form>
  )
}
