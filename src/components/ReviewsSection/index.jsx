import Link from 'next/link'
import { reviewsSectionData } from 'data/reviewsSectionData'
import SwiperReviewsCard from 'components/ReviewsSection/SwiperReviewsCard'
import styles from 'components/ReviewsSection/ReviewsSection.module.scss'

export default function ReviewsSection() {
  const {
    textBlock: { text, title },
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
        <SwiperReviewsCard />
      </div>
    </section>
  )
}
