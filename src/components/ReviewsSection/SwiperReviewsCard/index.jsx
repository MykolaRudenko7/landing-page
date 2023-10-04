'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import { reviewsSectionData } from 'data/reviewsSectionData'
import ReviewsSectionCardItem from 'components/ReviewsSection/ReviewsSectionCardItem'
import 'swiper/css'
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
        2560: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        425: {
          slidesPerView: 2.2,
        },
        375: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1.2,
        },
      }}
      className={styles.swiper}
      grabCursor={true}
      modules={[Autoplay]}
      slidesPerView={3.5}
    >
      {cards.map((item) => (
        <SwiperSlide key={uuidv4()}>
          <ReviewsSectionCardItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
