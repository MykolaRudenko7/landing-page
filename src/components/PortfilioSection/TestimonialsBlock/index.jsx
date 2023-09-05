import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { portfolioSectionData } from 'data/portfolioSectionData'
import TestimonialsBlockCardItem from './TestimonialsBlockCardItem'
import styles from 'components/PortfilioSection/TestimonialsBlock/TestimonialsBlock.module.scss'

export default function TestimonialsBlock() {
  const {
    testimonialsBlockData: {
      textBlock: { text, title },
      cards,
    },
  } = portfolioSectionData

  return (
    <div className={styles.testimonialsBlock}>
      <div className={styles.testimonialsBlockWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.testimonialsBlockLable}>
            <h3 className={styles.buttonText}>Testimonials</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h5 className={styles.testimonialsBlockTitle}>{title}</h5>
            <p className={styles.testimonialsBlockText}>{text}</p>
          </div>
          <Link
            about="learn more"
            className={styles.testimonialsBlockButton}
            href="#"
            role="button"
            tabIndex="0"
          >
            <span className={styles.buttonText}>learn more</span>
          </Link>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardsWrapper}>
            {cards.map((item) => (
              <TestimonialsBlockCardItem key={uuidv4()} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
