import styles from 'components/ContactUsSection/ContactForm/ContactFormInput/ContactFormInput.module.scss'

export default function ContactFormInput({ id, name, label, type, register, error }) {
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
        {label}
      </label>
      {error && <small className={styles.textDanger}>{error.message}</small>}
    </div>
  )
}
