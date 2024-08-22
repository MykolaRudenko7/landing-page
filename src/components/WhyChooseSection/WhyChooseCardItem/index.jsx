import { useTranslations } from 'next-intl'
import styles from 'components/WhyChooseSection/WhyChooseCardItem/WhyChooseCardItem.module.scss'

export default function WhyChooseCardItem({ cardId }) {
  const tSection = useTranslations('WhyChooseSection')

  return (
    <div className={styles.whyChooseCardItem}>
      <div className={styles.whyChooseCardItemWrapper}>
        <h5 className={styles.title}>{tSection(`card${cardId}.title`)}</h5>
        <p className={styles.text}>{tSection(`card${cardId}.text`)}</p>
      </div>
    </div>
  )
}
