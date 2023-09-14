'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from 'components/PortfilioSection/PortfolioBlock/PortfolioBlockCardItem/PotfolioBlockCardItem.module.scss'

export default function PortfolioBlockCardItem({ title, imageSrc, text }) {
  const { goals, features, techStackTags } = text || {}

  const [showTextBlock, setShowTextBlock] = useState(false)

  const handleShowTextBlockTogle = () => {
    if (text) {
      setShowTextBlock(!showTextBlock)
    }
  }

  return (
    <div className={styles.card} onClick={handleShowTextBlockTogle}>
      <h6 className={styles.cardTitle}>
        <span className={styles.cardTitleText}>{title}</span>
      </h6>
      <div className={styles.content}>
        {!showTextBlock ? (
          <div className={styles.cardImageWrapper}>
            <Image alt="card content" className={styles.cardImage} loading="eager" src={imageSrc} />
          </div>
        ) : (
          <div className={styles.apearWrapper}>
            <div className={styles.apearCardContent}>
              <div className={styles.leftSideContent}>
                <div className={styles.goalsBlock}>
                  <h6 className={styles.goalsTitle}>Goals</h6>
                  <ul className={styles.goalsListItems}>
                    {goals?.map((item) => (
                      <li className={styles.goalsListItem} key={uuidv4()}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.featuresBlock}>
                  <h6 className={styles.featuresTitle}>Features</h6>
                  <ul className={styles.featuresListItems}>
                    {features?.map((item) => (
                      <li className={styles.featuresListItem} key={uuidv4()}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className={styles.techStackTagsListItems}>
                {techStackTags?.map((item) => (
                  <li className={styles.techStackTagsListItem} key={uuidv4()}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              about="explore more"
              className={styles.cardButton}
              href="#"
              role="button"
              tabIndex="0"
            >
              <span className={styles.buttonText}>Explore more</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
