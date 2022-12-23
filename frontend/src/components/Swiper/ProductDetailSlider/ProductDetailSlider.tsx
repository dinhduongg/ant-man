import { FC, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Swiper as Swiperr } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './ProductDetailSlider.css'

interface Props {
  images?: string[]
}

const ProductDetailSlider: FC<Props> = () => {
  const [activeThumb, setActiveThumb] = useState<any>()
  const swiperRef = useRef<any>()

  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg'
  ]

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
        className='product-images-slider'
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt='product images' />
          </SwiperSlide>
        ))}
        <div className='hidden lg:flex items-center justify-between nav-btn absolute top-2/4 -translate-y-2/4 z-10 w-full px-7 duration-300 opacity-0'>
          <div
            className='text-3xl text-black cursor-pointer hover:text-primary duration-200'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className='text-3xl text-black cursor-pointer hover:text-primary duration-200'
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='product-images-slider-thumbs-wrapper'>
              <img src={item} alt='product images' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductDetailSlider
