import { useTranslations } from 'next-intl'
import styles from 'components/ContactUsSection/ContactForm/ContactFormCheckbox/ContactFormCheckbox.module.scss'

interface ContactFormCheckbox {
  id: string
  value: string
  isChecked: boolean
  onChange: (id: string) => void
  tId: number
}

export default function ContactFormCheckbox({
  id,
  value,
  isChecked,
  onChange,
  tId,
}: ContactFormCheckbox) {
  const tPlaceholders = useTranslations('ContactCheckboxPlaceholders')
  const checkboxLabel = tPlaceholders(`option${tId.toString()}`)

  return (
    <div className={styles.checkboxContainer}>
      <input
        autoComplete="off"
        checked={isChecked}
        className={styles.checkboxInput}
        id={id}
        onChange={() => {
          onChange(id)
        }}
        type="checkbox"
        value={value}
      />
      <label className={styles.checkboxLabel} htmlFor={id}>
        {checkboxLabel}
      </label>
    </div>
  )
}
