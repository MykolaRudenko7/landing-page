'use client'

import { useEffect, useId, useState } from 'react'
import cn from 'classnames'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import CreatableSelect from 'react-select/creatable'
import { useForm, Controller } from 'react-hook-form'
import { getInputFields } from 'utils/getInputFields'
import { validationFormRules } from 'utils/validationFormRules'
import { contactCountryOptions, customStylesMarkets } from 'data/contactUsSectionData'
import Loading from 'shared/Loading'
import ContactFormInput from 'components/ContactUsSection/ContactForm/ContactFormInput'
import 'react-phone-input-2/lib/style.css'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'

export default function ContactForm() {
  const [error, setError] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    clearErrors('phone')
  }, [selectedCountry])

  const currentTime = new Date().toLocaleString()

  const methods = useForm({
    mode: 'onChange',
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    control,
    reset,
    clearErrors,
  } = methods

  const { mobileNumberValidation, countryValidation, textAreaValidation } = validationFormRules
  const inputFields = getInputFields(register, errors)

  const contactFormId = useId()
  const phoneNumberInputId = useId()
  const marketToContactSelectId = useId()
  const yourMessageTextareaId = useId()

  const onFormSubmit = async (data) => {
    try {
      const response = await axios.post(process.env.GOOGLE_SPREADSHEET, {
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        market: data.country.value,
        message: data.messageArea,
        date: currentTime,
      })
      setError(false)
      reset()
    } catch (error) {
      setError(true)

      throw new Error(error)
    }
  }

  return (
    <form
      className={styles.formBlock}
      id={contactFormId}
      method="POST"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {inputFields.map((input) => (
        <ContactFormInput key={input.id} {...input} />
      ))}
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
              onChange={(newValue) => {
                setSelectedCountry(newValue)
                onChange(newValue)
              }}
              options={contactCountryOptions}
              placeholder={'Market to contact'}
              styles={customStylesMarkets}
              tabIndex="0"
              value={value}
            />
          )}
          rules={countryValidation}
        />
        {errors.country && <small className={styles.textDanger}>{errors.country.message}</small>}
      </div>
      <div className={styles.inputContainer}>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              buttonClass={styles.tellButton}
              containerClass={styles.tellContainer}
              country={selectedCountry?.code}
              dropdownClass={styles.tellDropdown}
              enableAreaCodes={true}
              id={phoneNumberInputId}
              inputClass={styles.tellInput}
              onChange={(newValue) => onChange(newValue)}
              placeholder="Phone Number"
              tabIndex="0"
              value={value}
              enableAreaCodeStretch
            />
          )}
          rules={mobileNumberValidation.validate(selectedCountry)}
        />
        {errors.phone && <small className={styles.textDanger}>{errors.phone.message}</small>}
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
          disabled={isSubmitSuccessful}
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
        {isSubmitSuccessful && isValid && <p className={styles.submitMessageSuccess}>Success ✅</p>}
        {isSubmitting && <Loading />}
      </div>
    </form>
  )
}
