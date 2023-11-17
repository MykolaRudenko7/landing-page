import { useTranslations } from 'next-intl'
import styles from 'components/ContactUsSection/ContactForm/ContactFormCheckbox/ContactFormCheckbox.module.scss'

export default function ContactFormCheckbox({ id, value, isChecked, onChange, tId }) {
  const tPlaceholder = useTranslations('ContactCheckboxPlaceholders')

  return (
    <div className={styles.checkboxContainer}>
      <input
        autoComplete="off"
        checked={isChecked}
        className={styles.checkboxInput}
        id={id}
        onChange={() => onChange(id)}
        type="checkbox"
        value={value}
      />
      <label className={styles.checkboxLabel} htmlFor={id}>
        {tPlaceholder(`option${tId}`)}
      </label>
    </div>
  )
}
