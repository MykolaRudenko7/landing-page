'use client'

import { useId, useState } from 'react'
import cn from 'classnames'
import PhoneInput from 'react-phone-input-2'
import CreatableSelect from 'react-select/creatable'
import { useForm, Controller } from 'react-hook-form'
import { contactCountryOptions, customStyles } from 'data/contactUsSectionData'
import { validationFormRules } from 'utils/validationFormRules'
import 'react-phone-input-2/lib/style.css'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'

export default function ContactForm() {
  const [formData, setFormData] = useState({})
  console.log(formData)
  const [error, setError] = useState(null)

  const methods = useForm({
    mode: 'onChange',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = methods

  const {
    nameValidation,
    lastNameValidation,
    emailValidation,
    mobileNumberValidation,
    countryValidation,
    textAreaValidation,
  } = validationFormRules

  const contactFormId = useId()
  const firstNameInputId = useId()
  const lastNameInputId = useId()
  const emailInputId = useId()
  const phoneNumberInputId = useId()
  const marketToContactSelectId = useId()
  const yourMessageTextareaId = useId()

  const onFormSubmit = (data) => {
    try {
      reset()
      setFormData({
        ...data,
        country: data.country.label,
      })
    } catch (error) {
      setError(true)
      throw new Error(error)
    }
  }

  return (
    <form
      className={styles.formBlock}
      id={contactFormId}
      onSubmit={handleSubmit(onFormSubmit)}
      method="POST"
    >
      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={firstNameInputId}
          name="firstName"
          placeholder=" "
          tabIndex="0"
          type="text"
          {...register('firstName', nameValidation)}
        />
        <label className={styles.label} htmlFor={firstNameInputId}>
          Name
        </label>
        {errors.firstName && (
          <small className={styles.textDanger}>{errors.firstName.message}</small>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={lastNameInputId}
          name="lastName"
          placeholder=" "
          tabIndex="0"
          type="text"
          {...register('lastName', lastNameValidation)}
        />
        <label className={styles.label} htmlFor={lastNameInputId}>
          Last Name
        </label>
        {errors.lastName && <small className={styles.textDanger}>{errors.lastName.message}</small>}
      </div>
      <div className={styles.inputContainer}>
        <input
          autoComplete="on"
          className={styles.input}
          id={emailInputId}
          name="email"
          placeholder=" "
          tabIndex="0"
          type="email"
          {...register('email', emailValidation)}
        />
        <label className={styles.label} htmlFor={emailInputId}>
          E-mail
        </label>
        {errors.email && <small className={styles.textDanger}>{errors.email.message}</small>}
      </div>
      <div className={styles.inputContainer}>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              buttonClass={styles.tellButton}
              containerClass={styles.tellContainer}
              dropdownClass={styles.tellDropdown}
              enableAreaCodes={true}
              id={phoneNumberInputId}
              inputClass={styles.tellInput}
              inputProps={{
                required: true,
                autoFocus: true,
              }}
              onChange={(newValue) => onChange(newValue)}
              placeholder="Phone Number"
              tabIndex="0"
              value={value}
              enableAreaCodeStretch
            />
          )}
          rules={mobileNumberValidation}
        />
        {errors.phone && <small className={styles.textDanger}>{errors.phone.message}</small>}
      </div>
      <div className={cn(styles.inputContainerSelect, styles.inputContainer)}>
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, value } }) => (
            <CreatableSelect
              id={marketToContactSelectId}
              instanceId={marketToContactSelectId}
              isCreatable={true}
              isSearchable={true}
              onChange={onChange}
              options={contactCountryOptions}
              placeholder={'Market to contact'}
              styles={customStyles}
              tabIndex="0"
              value={value}
            />
          )}
          rules={countryValidation}
        />
        {errors.country && <small className={styles.textDanger}>{errors.country.message}</small>}
      </div>
      <div className={styles.inputContainer}>
        <textarea
          autoComplete="messageArea"
          className={cn(styles.input, styles.textarea)}
          id={yourMessageTextareaId}
          name="message"
          placeholder=" "
          rows="5"
          tabIndex="0"
          {...register('messageArea', textAreaValidation)}
        ></textarea>
        <label className={styles.label} htmlFor={yourMessageTextareaId}>
          Your message
        </label>
        {errors.messageArea && (
          <small className={styles.textDanger}>{errors.messageArea.message}</small>
        )}
      </div>
      <div className={styles.buttonBlock}>
        <button
          aria-label="submit"
          className={styles.submitButton}
          form={contactFormId}
          tabIndex="0"
          type="submit"
        >
          Submit Your Idea
        </button>
        {error && (
          <p className={styles.submitMessageError}>
            An error occurred while submitting the form. Please try again.
          </p>
        )}
        {Object.keys(formData).length > 0 && !error && (
          <p className={styles.submitMessageSuccess}>Success ✅</p>
        )}
      </div>
    </form>
  )
}
