'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import styles from 'components/IntroSection/IntroCardItem/IntroCardItem.module.scss'

export default function IntroCardItem({ imageSrc, cardId, isHoverCard, setIsHoverCard }) {
  const tCards = useTranslations('IntroSectionCards')
  const title = tCards(`card${cardId}.title`)
  const subtitle = tCards(`card${cardId}.subtitle`)
  const text = tCards(`card${cardId}.text`)

  const handleCardMouseEnter = () => {
    setIsHoverCard(cardId)
  }
  const handleCardMouseLeave = () => {
    setIsHoverCard(null)
  }
  const isBlurred = isHoverCard !== null && isHoverCard !== cardId

  return (
    <motion.div
      animate={{ filter: isBlurred ? 'blur(1.5px)' : 'none' }}
      className={styles.card}
      onHoverEnd={handleCardMouseLeave}
      onHoverStart={handleCardMouseEnter}
    >
      <div className={styles.cardImageWrapper}>
        <Image alt="card image" className={styles.cardImage} src={imageSrc} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.cardSubTitle}>{subtitle}</p>
      <motion.p
        animate={{
          opacity: isHoverCard === cardId ? 1 : 0.6,
          overflow: isHoverCard === cardId ? 'unset' : 'hidden',
        }}
        className={styles.cardText}
        initial={{
          opacity: 0.6,
          overflow: 'hidden',
        }}
        transition={{ duration: 0.4 }}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}
