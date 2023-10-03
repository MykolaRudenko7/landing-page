import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { reviewsSectionData } from 'data/reviewsSectionData'
import ReviewsSectionCardItem from 'components/ReviewsSection/ReviewsSectionCardItem'
import styles from 'components/ReviewsSection/ReviewsSection.module.scss'

export default function ReviewsSection() {
  const {
    textBlock: { text, title },
    cards,
  } = reviewsSectionData

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={styles.reviewsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.reviewsSectionLable}>
            <h3 className={styles.titleText}>Reviews</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h5 className={styles.reviewsSectionTitle}>{title}</h5>
            <p className={styles.reviewsSectionText}>{text}</p>
          </div>
          <Link
            about="learn more"
            className={styles.reviewsSectionButton}
            href="#"
            role="button"
            tabIndex="0"
          >
            Learn more
          </Link>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardsWrapper}>
            {cards.map((item) => (
              <ReviewsSectionCardItem key={uuidv4()} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
