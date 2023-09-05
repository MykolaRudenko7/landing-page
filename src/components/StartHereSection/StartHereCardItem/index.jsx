import Image from 'next/image'
import styles from 'components/StartHereSection/StartHereCardItem/StartHereCardItem.module.scss'

export default function StartHereCardItem({ imageSrc, title, subtitle, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
<<<<<<< HEAD
        <Image alt="card image" className={styles.cardImage} loading="eager" src={imageSrc} />
=======
        <Image loading="eager" className={styles.cardImage} alt="card image" src={imageSrc} />
>>>>>>> 572dba4a5b3b383902c4a74e125e381b370139b8
      </div>
      <p className={styles.cardSubTitle}>{subtitle}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  )
}
