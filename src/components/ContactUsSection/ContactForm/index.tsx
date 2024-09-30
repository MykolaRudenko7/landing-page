'use client'

import { memo, useEffect, useId, useState } from 'react'
import cn from 'classnames'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import CreatableSelect from 'react-select/creatable'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { getCheckboxField, getInputFields } from 'utils/getInputFields'
import { contactFormSchema } from 'utils/validationFormRules'
import { contactCountryOptions, customStylesMarkets } from 'data/contactUsSectionData'
import Loading from 'shared/Loading'
import ContactFormInput from 'components/ContactUsSection/ContactForm/ContactFormInput'
import ContactFormCheckbox from 'components/ContactUsSection/ContactForm/ContactFormCheckbox'
import { ICountryOptions, IFormValues, InputFieldsNames } from 'types/types'
import 'react-phone-input-2/lib/style.css'
import styles from 'components/ContactUsSection/ContactForm/ContactForm.module.scss'

function ContactForm() {
  const [error, setError] = useState<boolean>(false)
  const [selectedCountry, setSelectedCountry] = useState<ICountryOptions>({
    value: '',
    label: '',
    code: '',
  })
  const [selectedContactMethods, setSelectedContactMethods] = useState<string[]>([''])

  useEffect(() => {
    clearErrors(InputFieldsNames.Phone)
  }, [selectedCountry])

  const tContact = useTranslations('ContactUsSection')
  const tCountries = useTranslations('ContactCountryOptions')
  const tPlaceholders = useTranslations('ContactFormPlaceholders')
  const tButtons = useTranslations('Buttons')
  const errorMessage = tContact('errorMessage')
  const successMessage = tContact('successMessage')
  const checkboxTitle = tPlaceholders('preferredContactMethods')
  const submitButtonText = tButtons('buttonSubmit')
  const yourMessageLabel = tPlaceholders('yourMessage')
  const phoneNumberLabel = tPlaceholders('phoneNumber')
  const marketToContactLabel = tPlaceholders('marketToContact')
  const countriesOptions = contactCountryOptions.map((_, tId) =>
    tCountries(`option${tId.toString()}`),
  )

  const methods = useForm<IFormValues>({
    mode: 'onChange',
    resolver: zodResolver(contactFormSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    control,
    reset,
    clearErrors,
  } = methods

  const inputFields = getInputFields(register, errors)
  const { checkboxes } = getCheckboxField

  const currentTime = new Date().toLocaleString()

  const contactFormId = useId()
  const phoneNumberInputId = useId()
  const marketToContactSelectId = useId()
  const yourMessageTextareaId = useId()

  const handleCheckboxChange = (method: string) => {
    setSelectedContactMethods((prevMethods) => {
      if (prevMethods.includes(method)) {
        return prevMethods.filter((m) => m !== method)
      }

      return [...prevMethods, method]
    })
  }

  const updateSelectedCountry = (newValue: ICountryOptions) => {
    setSelectedCountry(newValue)
    setSelectedContactMethods(
      newValue.label === 'Україна' || newValue.label === 'Ukraine' ? ['phone'] : [],
    )
  }

  const onFormSubmit: SubmitHandler<IFormValues> = (data) => {
    axios
      .post(process.env.GOOGLE_SPREADSHEET ?? '', {
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        market: data.country.value,
        message: data.messageArea,
        date: currentTime,
        contactMethods: selectedContactMethods.join(', '),
      })
      .then(() => {
        setError(false)
        reset()
      })
      .catch((error: unknown) => {
        setError(true)

        if (error instanceof Error) {
          throw new Error(error.message)
        } else {
          throw new Error('An unknown error occurred')
        }
      })
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
      <div className={styles.inputContainer}>
        <Controller
          control={control}
          name={InputFieldsNames.Country}
          render={({ field: { onChange, value } }) => (
            <CreatableSelect
              aria-label={marketToContactLabel}
              id={marketToContactSelectId}
              instanceId={marketToContactSelectId}
              onChange={(newValue) => {
                if (newValue) {
                  onChange(newValue)
                  updateSelectedCountry(newValue as ICountryOptions)
                }
              }}
              options={contactCountryOptions.map((option, tId) => ({
                value: option.value,
                label: countriesOptions[tId],
                code: option.code,
              }))}
              placeholder={marketToContactLabel}
              styles={customStylesMarkets}
              tabIndex={0}
              value={value}
              isSearchable
            />
          )}
        />
        {errors.country && <small className={styles.textDanger}>{errors.country.message}</small>}
      </div>
      <div className={styles.inputContainer}>
        <Controller
          control={control}
          name={InputFieldsNames.Phone}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              aria-label={phoneNumberLabel}
              buttonClass={styles.tellButton}
              containerClass={styles.tellContainer}
              country={selectedCountry.code}
              dropdownClass={styles.tellDropdown}
              inputClass={styles.tellInput}
              inputProps={{ id: phoneNumberInputId }}
              onChange={(newValue) => {
                onChange(newValue)
              }}
              placeholder={phoneNumberLabel}
              searchClass={styles.tellSearch}
              value={value}
              enableAreaCodeStretch
              enableAreaCodes
            />
          )}
        />
        {errors.phone && <small className={styles.textDanger}>{errors.phone.message}</small>}
      </div>
      <div className={styles.checkboxContainer}>
        <p className={styles.checkboxTitle}>{checkboxTitle}</p>
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
          autoComplete="on"
          className={cn(styles.input, styles.textarea)}
          id={yourMessageTextareaId}
          placeholder=" "
          rows={5}
          tabIndex={0}
          {...register(InputFieldsNames.MessageArea)}
        />
        <label className={styles.label} htmlFor={yourMessageTextareaId}>
          {yourMessageLabel}
        </label>
        {errors.messageArea && (
          <small className={styles.textDanger}>{errors.messageArea.message}</small>
        )}
      </div>
      <div className={styles.buttonBlock}>
        <button
          aria-label={submitButtonText}
          className={styles.submitButton}
          disabled={isSubmitSuccessful}
          form={contactFormId}
          tabIndex={0}
          type="submit"
        >
          {submitButtonText}
        </button>
        {error && <p className={styles.submitMessageError}>{errorMessage}</p>}
        {isSubmitSuccessful && isValid && (
          <p className={styles.submitMessageSuccess}>{successMessage}</p>
        )}
        {isSubmitting && <Loading />}
      </div>
    </form>
  )
}

export default memo(ContactForm)
