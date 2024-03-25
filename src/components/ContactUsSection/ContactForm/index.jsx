'use client'

import { memo, useEffect, useId, useState } from 'react'
import cn from 'classnames'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import CreatableSelect from 'react-select/creatable'
import { useForm, Controller } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { getCheckboxField, getInputFields } from 'utils/getInputFields'
import { validationFormRules } from 'utils/validationFormRules'
import { contactCountryOptions, customStylesMarkets } from 'data/contactUsSectionData'
import Loading from 'shared/Loading'
import ContactFormInput from 'components/ContactUsSection/ContactForm/ContactFormInput'
import ContactFormCheckbox from 'components/ContactUsSection/ContactForm/ContactFormCheckbox'
import 'react-phone-input-2/lib/style.css'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'

function ContactForm() {
  const [error, setError] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedContactMethods, setSelectedContactMethods] = useState([])

  useEffect(() => {
    clearErrors('phone')
  }, [selectedCountry])

  const tContact = useTranslations('ContactUsSection')
  const tCountry = useTranslations('ContactCountryOptions')
  const tPlaceholder = useTranslations('ContactFormPlaceholders')
  const tButton = useTranslations('Buttons')
  const tErrorMessage = tContact('errorMessage')
  const tSuccessMessage = tContact('successMessage')

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
  const { checkboxes } = getCheckboxField

  const currentTime = new Date().toLocaleString()

  const contactFormId = useId()
  const phoneNumberInputId = useId()
  const marketToContactSelectId = useId()
  const yourMessageTextareaId = useId()

  const handleCheckboxChange = (method) => {
    setSelectedContactMethods((prevMethods) => {
      if (prevMethods.includes(method)) {
        return prevMethods.filter((m) => m !== method)
      }

      return [...prevMethods, method]
    })
  }

  const handleCountryChange = (newValue) => {
    setSelectedCountry(newValue)
    setSelectedContactMethods(
      newValue.label === 'Україна' || newValue.label === 'Ukraine' ? ['phone'] : [],
    )
  }

  const onFormSubmit = async (data) => {
    try {
      const response = await axios.post(process.env.GOOGLE_SPREADSHEET, {
        // name: data.firstName,
        // lastName: data.lastName,
        // email: data.email,
        // phone: data.phone,
        // market: data.country.value,
        // message: data.messageArea,
        // date: currentTime,
        // contactMethods: selectedContactMethods.join(', '),
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
      {inputFields.map((input, id) => (
        <ContactFormInput key={input.id} {...input} tId={id} />
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
                handleCountryChange(newValue)
                onChange(newValue)
              }}
              options={contactCountryOptions.map((option, index) => {
                const translatedOption = tCountry(`option${index}`)

                return {
                  value: option.value,
                  label: translatedOption,
                  code: option.code,
                }
              })}
              placeholder={tPlaceholder('marketToContact')}
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
              placeholder={tPlaceholder('phoneNumber')}
              searchClass={styles.tellSearch}
              tabIndex="0"
              value={value}
              enableAreaCodeStretch
            />
          )}
          rules={mobileNumberValidation.validate(selectedCountry)}
        />
        {errors.phone && <small className={styles.textDanger}>{errors.phone.message}</small>}
      </div>
      <div className={styles.checkboxContainer}>
        <p className={styles.checkboxTitle}>{tPlaceholder('preferredContactMethods')}</p>
        <div className={styles.checkboxFields}>
          {checkboxes.map((checkbox, id) => (
            <ContactFormCheckbox
              key={checkbox.id}
              {...checkbox}
              isChecked={selectedContactMethods.includes(checkbox.id)}
              onChange={handleCheckboxChange}
              tId={id}
            />
          ))}
        </div>
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
          {tPlaceholder('yourMessage')}
        </label>
        {errors.messageArea && (
          <small className={styles.textDanger}>{errors.messageArea.message}</small>
        )}
      </div>
      <div className={styles.buttonBlock}>
        <button
          aria-label={tButton('buttonSubmit')}
          className={styles.submitButton}
          disabled={isSubmitSuccessful}
          form={contactFormId}
          tabIndex="0"
          type="submit"
        >
          {tButton('buttonSubmit')}
        </button>
        {error && <p className={styles.submitMessageError}>{tErrorMessage}</p>}
        {isSubmitSuccessful && isValid && (
          <p className={styles.submitMessageSuccess}>{tSuccessMessage}</p>
        )}
        {isSubmitting && <Loading />}
      </div>
    </form>
  )
}

export default memo(ContactForm)
