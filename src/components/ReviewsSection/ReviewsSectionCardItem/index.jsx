import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from 'components/ReviewsSection/ReviewsSectionCardItem/ReviewsSectionCardItem.module.scss'

export default function ReviewsSectionCardItem({ imageSrc, cardId }) {
  const tReviewSection = useTranslations('ReviewsSectionData')

  return (
    <div className={styles.reviewsSectionCardItem}>
      <div className={styles.cardImageWrapper}>
        <Image alt="character image" className={styles.cardImage} src={imageSrc} priority />
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{tReviewSection(`cards.card${cardId}.name`)}</p>
        <p className={styles.cardVacancy}>{tReviewSection(`cards.card${cardId}.vacancy`)}</p>
        <p className={styles.cardText}>{tReviewSection(`cards.card${cardId}.content`)}</p>
      </div>
    </div>
  )
}
