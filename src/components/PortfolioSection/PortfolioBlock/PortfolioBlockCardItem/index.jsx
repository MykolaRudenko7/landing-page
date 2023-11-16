'use client'

import { useState } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppearTextCardContentItem from 'components/PortfolioSection/PortfolioBlock/PortfolioBlockCardItem/AppearTextCardContentItem'
import styles from 'components/PortfolioSection/PortfolioBlock/PortfolioBlockCardItem/PortfolioBlockCardItem.module.scss'

export default function PortfolioBlockCardItem({ imageSrc, text, cardId }) {
  const [showTextBlock, setShowTextBlock] = useState(false)

  const handleShowTextBlockToggle = () => {
    if (text) {
      setShowTextBlock(!showTextBlock)
    }
  }

  const tPortfolioSectionCards = useTranslations('PortfolioSectionCards')
  const cardTitle = tPortfolioSectionCards(`card${cardId}.title`)

  return (
    <div className={styles.card} onClick={handleShowTextBlockToggle}>
      <h6 className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{cardTitle}</span>
      </h6>
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
              <Image alt="card content" className={styles.cardImage} src={imageSrc} />
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
              {text?.map((textBlock, labelId) => (
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
