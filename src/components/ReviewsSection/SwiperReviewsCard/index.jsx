'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import { reviewsSectionData } from 'data/reviewsSectionData'
import ReviewsSectionCardItem from 'components/ReviewsSection/ReviewsSectionCardItem'
import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from 'components/ReviewsSection/SwiperReviewsCard/SwiperReviewsCard.module.scss'

export default function SwiperReviewsCard() {
  const { cards } = reviewsSectionData

  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.4,
        },
        600: {
          slidesPerView: 2,
        },
      }}
      className={styles.swiper}
      grabCursor={true}
      modules={[Autoplay, Navigation]}
      slidesPerView={2}
      spaceBetween={25}
      navigation
    >
      {cards.map((item) => (
        <SwiperSlide key={uuidv4()}>
          <ReviewsSectionCardItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
