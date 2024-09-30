'use client'

import { useState, memo } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppearTextCardContentItem from 'components/PortfolioSection/PortfolioBlockCardItem/AppearTextCardContentItem'
import { PortfolioBlockCardItemProps } from 'types/types'
import styles from 'components/PortfolioSection/PortfolioBlockCardItem/PortfolioBlockCardItem.module.scss'

function PortfolioBlockCardItem({ imageSrc, text, cardId }: PortfolioBlockCardItemProps) {
  const [showTextBlock, setShowTextBlock] = useState(false)

  const tPortfolioSectionCards = useTranslations('PortfolioSectionCards')
  const cardTitle = tPortfolioSectionCards(`card${cardId.toString()}.title`)
  const cardImageAlt = tPortfolioSectionCards(`card${cardId.toString()}.imageAlt`)

  const handleShowTextBlockToggle = () => {
    setShowTextBlock(!showTextBlock)
  }

  return (
    <div className={styles.card} onClick={handleShowTextBlockToggle}>
      <h5 className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{cardTitle}</span>
      </h5>
      <div className={styles.content}>
        <AnimatePresence>
          {!showTextBlock && (
            <motion.div
              animate={{ height: 'auto', y: 0 }}
              className={styles.frontCard}
              exit={{ height: 0, y: -200, scale: 1.2 }}
              initial={{ height: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt={cardImageAlt}
                className={styles.cardImage}
                height={500}
                loading="lazy"
                src={imageSrc}
                width={800}
              />
              <FontAwesomeIcon className={styles.arrow} icon={faArrowTurnUp} rotation={90} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showTextBlock && (
            <motion.div
              animate={{ height: 'auto', y: 0 }}
              className={styles.backCard}
              exit={{ height: 0, scale: 0.8, opacity: 0 }}
              initial={{ height: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {text.map((textBlock, labelId) => (
                <AppearTextCardContentItem
                  key={uuidv4()}
                  {...textBlock}
                  cardId={cardId}
                  labelId={labelId}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default memo(PortfolioBlockCardItem)
