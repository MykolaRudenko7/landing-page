'use client'

import { memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { IntroCardItemProps } from 'types/types'
import styles from 'components/IntroSection/IntroCardItem/IntroCardItem.module.scss'

function IntroCardItem({ imageSrc, cardId, isHoverCard, setIsHoverCard }: IntroCardItemProps) {
  const tCards = useTranslations('IntroSectionCards')
  const tImages = useTranslations('Images')

  const title = tCards(`card${cardId.toString()}.title`)
  const subtitle = tCards(`card${cardId.toString()}.subtitle`)
  const text = tCards(`card${cardId.toString()}.text`)
  const imageAlt = tImages(`introCard`)

  const isBlurred = isHoverCard !== null && isHoverCard !== cardId

  const animationsParagraph = {
    animate: {
      opacity: isHoverCard === cardId ? 1 : 0.7,
      overflow: isHoverCard === cardId ? 'unset' : 'hidden',
    },
    initial: {
      opacity: 0.7,
      overflow: 'hidden',
    },
    transition: {
      duration: 0.4,
    },
  }
  const animationsDiv = { filter: isBlurred ? 'blur(1.5px)' : 'none' }

  const handleCardMouseEnter = () => {
    setIsHoverCard(cardId)
  }
  const handleCardMouseLeave = () => {
    setIsHoverCard(null)
  }

  return (
    <motion.div
      animate={animationsDiv}
      className={styles.card}
      onHoverEnd={handleCardMouseLeave}
      onHoverStart={handleCardMouseEnter}
      role="listitem"
    >
      <div className={styles.cardImageWrapper}>
        <Image
          alt={imageAlt}
          className={styles.cardImage}
          height={100}
          src={imageSrc}
          width={100}
        />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.cardSubTitle}>{subtitle}</p>
      <motion.p
        animate={animationsParagraph.animate}
        className={styles.cardText}
        initial={animationsParagraph.initial}
        transition={animationsParagraph.transition}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}

export default memo(IntroCardItem)
