import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ReviewsSectionCardItemProps } from 'types/types'
import styles from 'components/ReviewsSection/ReviewsSectionCardItem/ReviewsSectionCardItem.module.scss'

export default function ReviewsSectionCardItem({ imageSrc, cardId }: ReviewsSectionCardItemProps) {
  const tReviewSection = useTranslations('ReviewsSectionData')

  const name = tReviewSection(`cards.card${cardId.toString()}.name`)
  const vacancy = tReviewSection(`cards.card${cardId.toString()}.vacancy`)
  const content = tReviewSection(`cards.card${cardId.toString()}.content`)

  return (
    <div className={styles.reviewsSectionCardItem}>
      <div className={styles.cardImageWrapper}>
        <Image
          alt="character image"
          className={styles.cardImage}
          height={95}
          loading="lazy"
          src={imageSrc}
          width={95}
        />
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardVacancy}>{vacancy}</p>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  )
}
