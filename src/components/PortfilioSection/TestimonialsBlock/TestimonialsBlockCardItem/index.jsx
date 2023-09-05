import Image from 'next/image'
import styles from 'components/PortfilioSection/TestimonialsBlock/TestimonialsBlockCardItem/TestimonialsBlockCardItem.module.scss'

export default function TestimonialsBlockCardItem({ imageSrc, name, vacancy, content }) {
  return (
    <div className={styles.testimonialsBlockCardItem}>
      <div className={styles.cardImageWrapper}>
        <Image alt="character image" className={styles.cardImage} loading="eager" src={imageSrc} />
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardVacancy}>{vacancy}</p>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  )
}
