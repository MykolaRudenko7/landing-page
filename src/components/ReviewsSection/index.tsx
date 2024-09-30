import Link from 'next/link'
import { useTranslations } from 'next-intl'
import SwiperReviewsCard from 'components/ReviewsSection/SwiperReviewsCard'
import { ScrollSectionId } from 'types/types'
import styles from 'components/ReviewsSection/ReviewsSection.module.scss'

export default function ReviewsSection() {
  const tReviewSection = useTranslations('ReviewsSectionData')
  const tLabels = useTranslations('SectionLabels')
  const tButtons = useTranslations('Buttons')

  const label = tLabels('reviewsSection')
  const title = tReviewSection('textBlock.title')
  const text = tReviewSection('textBlock.text')
  const buttonText = tButtons('buttonLearn')

  return (
    <section className={styles.reviewsSection} id={ScrollSectionId.Reviews}>
      <div className={styles.reviewsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.reviewsSectionLabel}>
            <h3 className={styles.titleText}>{label}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.reviewsSectionTitle}>{title}</h4>
            <p className={styles.reviewsSectionText}>{text}</p>
          </div>
          <Link
            about={buttonText}
            className={styles.reviewsSectionButton}
            href="#"
            role="button"
            tabIndex={0}
          >
            {buttonText}
          </Link>
        </div>
        <SwiperReviewsCard />
      </div>
    </section>
  )
}
