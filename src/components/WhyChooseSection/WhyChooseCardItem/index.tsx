import { useTranslations } from 'next-intl'
import styles from 'components/WhyChooseSection/WhyChooseCardItem/WhyChooseCardItem.module.scss'
import { WhyChooseCardItemProps } from 'types/types'

export default function WhyChooseCardItem({ cardId }: WhyChooseCardItemProps) {
  const tSection = useTranslations('WhyChooseSection')
  const title = tSection(`card${cardId.toString()}.title`)
  const text = tSection(`card${cardId.toString()}.text`)

  return (
    <li className={styles.whyChooseCardItem} role="listitem">
      <div className={styles.whyChooseCardItemWrapper}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  )
}
