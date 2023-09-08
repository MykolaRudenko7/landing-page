'use client'

import Image from 'next/image'
import cn from 'classnames'
import styles from 'components/StartHereSection/StartHereCardItem/StartHereCardItem.module.scss'

export default function StartHereCardItem({
  imageSrc,
  title,
  subtitle,
  text,
  setOnHoverTextStyle,
  cardId,
  isHoverCard,
  setIsHoverCard,
}) {
  const handleCardMouseEnter = () => {
    setOnHoverTextStyle(true)
    setIsHoverCard(cardId)
  }
  const handleCardMouseLeave = () => {
    setOnHoverTextStyle(false)
    setIsHoverCard(null)
  }

  return (
    <div
      className={cn(styles.card, {
        [styles.blur]: isHoverCard !== cardId && isHoverCard !== null,
      })}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className={styles.cardImageWrapper}>
        <Image alt="card image" className={styles.cardImage} loading="eager" src={imageSrc} />
      </div>
      <p className={styles.cardSubTitle}>{subtitle}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  )
}
