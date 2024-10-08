'use client'

import { memo } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
import { reviewsSectionData } from 'data/reviewsSectionData'
import ReviewsSectionCardItem from 'components/ReviewsSection/ReviewsSectionCardItem'
import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from 'components/ReviewsSection/SwiperReviewsCard/SwiperReviewsCard.module.scss'

function SwiperReviewsCard() {
  const { cards } = reviewsSectionData

  return (
    <div className={styles.swiperBlock}>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        }}
        className={styles.swiper}
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.swiper-navigation-next',
          prevEl: '.swiper-navigation-prev',
        }}
        slidesPerView={2}
        spaceBetween={30}
        speed={1250}
        grabCursor
      >
        {cards.map((item, id) => (
          <SwiperSlide key={uuidv4()}>
            <ReviewsSectionCardItem {...item} cardId={id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button aria-label="previous slide" className="swiper-navigation-prev" type="button">
        ❮
      </button>
      <button aria-label="next slide" className="swiper-navigation-next" type="button">
        ❯
      </button>
    </div>
  )
}

export default memo(SwiperReviewsCard)
