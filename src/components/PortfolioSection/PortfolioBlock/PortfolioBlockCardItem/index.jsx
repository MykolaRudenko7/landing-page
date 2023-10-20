'use client'

import { useState } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppearTextCardContentItem from 'components/PortfolioSection/PortfolioBlock/PortfolioBlockCardItem/AppearTextCardContentItem'
import styles from 'components/PortfolioSection/PortfolioBlock/PortfolioBlockCardItem/PortfolioBlockCardItem.module.scss'

export default function PortfolioBlockCardItem({ title, imageSrc, text }) {
  const [showTextBlock, setShowTextBlock] = useState(false)

  const handleShowTextBlockToggle = () => {
    if (text) {
      setShowTextBlock(!showTextBlock)
    }
  }

  return (
    <motion.div
      className={styles.card}
      onClick={handleShowTextBlockToggle}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      <h6 className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{title}</span>
      </h6>
      <div className={styles.content}>
        {!showTextBlock ? (
          <div className={styles.cardImageWrapper}>
            <Image alt="card content" className={styles.cardImage} src={imageSrc} />
            <FontAwesomeIcon className={styles.arrow} icon={faArrowTurnUp} rotation={90} />
          </div>
        ) : (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.appearWrapper}
            initial={{ opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            <div className={styles.appearCardContent}>
              {text?.map((textBlock) => (
                <AppearTextCardContentItem key={uuidv4()} {...textBlock} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
