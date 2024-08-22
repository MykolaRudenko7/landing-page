import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { scrollSectionId } from 'data/scrollSectionId'
import SwiperReviewsCard from 'components/ReviewsSection/SwiperReviewsCard'
import styles from 'components/ReviewsSection/ReviewsSection.module.scss'

export default function ReviewsSection() {
  const { reviews } = scrollSectionId

  const tReviewSection = useTranslations('ReviewsSectionData')
  const tTitle = tReviewSection('textBlock.title')
  const tText = tReviewSection('textBlock.text')
  const tLabel = useTranslations('SectionLabels')
  const tButton = useTranslations('Buttons')

  return (
    <section className={styles.reviewsSection} id={reviews}>
      <div className={styles.reviewsSectionWrapper}>
        <div className={styles.textBlock}>
          <div className={styles.reviewsSectionLabel}>
            <h3 className={styles.titleText}>{tLabel('reviewsSection')}</h3>
          </div>
          <div className={styles.textBlockWrapper}>
            <h4 className={styles.reviewsSectionTitle}>{tTitle}</h4>
            <p className={styles.reviewsSectionText}>{tText}</p>
          </div>
          <Link
            about={tButton('buttonLearn')}
            className={styles.reviewsSectionButton}
            href="#"
            role="button"
            tabIndex="0"
          >
            {tButton('buttonLearn')}
          </Link>
        </div>
        <SwiperReviewsCard />
      </div>
    </section>
  )
}
