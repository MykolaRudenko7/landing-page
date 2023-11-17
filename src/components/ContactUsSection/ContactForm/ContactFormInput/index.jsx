import { useTranslations } from 'next-intl'
import styles from 'components/ContactUsSection/ContactForm/ContactFormInput/ContactFormInput.module.scss'

export default function ContactFormInput({ id, name, type, register, error, tId }) {
  const tPlaceholder = useTranslations('ContactInputPlaceholders')

  return (
    <div className={styles.inputContainer}>
      <input
        autoComplete="on"
        className={styles.input}
        id={id}
        name={name}
        placeholder=" "
        tabIndex="0"
        type={type}
        {...register}
      />
      <label className={styles.label} htmlFor={id}>
        {tPlaceholder(`option${tId}`)}
      </label>
      {error && <small className={styles.textDanger}>{error.message}</small>}
    </div>
  )
}
