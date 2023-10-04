import Image from 'next/image'
import styles from 'components/ReviewsSection/ReviewsSectionCardItem/ReviewsSectionCardItem.module.scss'

export default function ReviewsSectionCardItem({ imageSrc, name, vacancy, content }) {
  return (
    <div className={styles.reviewsSectionCardItem}>
      <div className={styles.cardImageWrapper}>
        <Image alt="character image" className={styles.cardImage} src={imageSrc} />
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardVacancy}>{vacancy}</p>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  )
}
