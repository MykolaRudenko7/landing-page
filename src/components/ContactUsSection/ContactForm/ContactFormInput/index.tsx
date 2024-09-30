import { useTranslations } from 'next-intl'
import { FieldError, UseFormRegister } from 'react-hook-form'
import styles from 'components/ContactUsSection/ContactForm/ContactFormInput/ContactFormInput.module.scss'
import { IFormValues } from 'types/types'

interface ContactFormInput {
  id: string
  type: string
  register: ReturnType<UseFormRegister<IFormValues>>
  error?: FieldError
  tId: number
}
export default function ContactFormInput({ id, type, register, error, tId }: ContactFormInput) {
  const tPlaceholders = useTranslations('ContactInputPlaceholders')
  const inputLabel = tPlaceholders(`option${tId.toString()}`)

  return (
    <div className={styles.inputContainer}>
      <input
        autoComplete="on"
        className={styles.input}
        id={id}
        placeholder=" "
        tabIndex={0}
        type={type}
        {...register}
      />
      <label className={styles.label} htmlFor={id}>
        {inputLabel}
      </label>
      {error && <small className={styles.textDanger}>{error.message}</small>}
    </div>
  )
}
