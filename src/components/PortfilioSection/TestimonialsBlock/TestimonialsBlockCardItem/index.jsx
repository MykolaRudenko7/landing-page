import Image from 'next/image'
import styles from 'components/PortfilioSection/TestimonialsBlock/TestimonialsBlockCardItem/TestimonialsBlockCardItem.module.scss'

export default function TestimonialsBlockCardItem({ imageSrc, name, vacancy, content }) {
  return (
    <div className={styles.testimonialsBlockCardItem}>
      <div className={styles.cardImageWrapper}>
<<<<<<< HEAD
        <Image alt="character image" className={styles.cardImage} loading="eager" src={imageSrc} />
=======
        <Image loading="eager" className={styles.cardImage} alt="character image" src={imageSrc} />
>>>>>>> 572dba4a5b3b383902c4a74e125e381b370139b8
      </div>
      <div className={styles.cardTextBlock}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardVacancy}>{vacancy}</p>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  )
}
