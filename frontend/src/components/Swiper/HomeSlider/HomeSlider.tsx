import React, { FC, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper'

import './HomeSlider.css'
import Button from '~/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const HomeSlider: FC = () => {
  const swiperRef: any = useRef()

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop
        // navigation
        modules={[Autoplay, Navigation]}
        className='mySwiper relative'
        speed={300}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <div
            className='relative w-full h-full bg-no-repeat bg-cover bg-[100%_0] lg:bg-[50%_50%] pt-[300px] md:pt-[450px] lg:pt-[600px]'
            style={{
              backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg")`
            }}
          >
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40'></div>
            <div className='animate-add absolute container mx-auto top-0 right-0 bottom-0 left-0 px-4'>
              <div className='absolute top-2/4 -translate-y-2/4 w-full lg:w-2/5 text-left text-white left-0 right-0 px-4'>
                <h3 className='text-base md:text-xl lg:text-2xl my-3 font-bold'>Mona Watch</h3>
                <h1 className='text-4xl md:text-5xl lg:text-6xl my-3 font-bold'>Đồng hồ Classico</h1>
                <p className='text-xs md:text-sm lg:text-base text-[#f1f1f1] my-4 font-bold'>
                  Cùng với sự phát triển không ngừng nghỉ của thời trang thế giới, rất nhiều thương hiệu cho ra những
                  mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ ...
                </p>
                <Button
                  outline
                  custom='lg:w-2/5 border-2 border-white hover:border-primary !text-white'
                  to='/dong-ho-nam'
                >
                  Xem sản phẩm
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='relative w-full h-full bg-no-repeat bg-cover bg-[100%_0] lg:bg-[50%_50%] pt-[300px] md:pt-[450px] lg:pt-[600px]'
            style={{
              backgroundImage: `url("http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg")`
            }}
          >
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40'></div>
            <div className='animate-add absolute container mx-auto top-0 right-0 bottom-0 left-0 px-4'>
              <div className='absolute top-2/4 -translate-y-2/4 w-full lg:w-2/5 text-left text-white left-0 right-0 px-4'>
                <h3 className='text-base md:text-xl lg:text-2xl my-3 font-bold'>Mona Watch</h3>
                <h1 className='text-4xl md:text-5xl lg:text-6xl my-3 font-bold'>Đồng hồ Classico</h1>
                <p className='text-xs md:text-sm lg:text-base my-4 text-[#f1f1f1] font-bold'>
                  Cùng với sự phát triển không ngừng nghỉ của thời trang thế giới, rất nhiều thương hiệu cho ra những
                  mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ ...
                </p>
                <Button
                  outline
                  custom='lg:w-2/5 border-2 border-white hover:border-primary !text-white'
                  to='/dong-ho-nam'
                >
                  Xem sản phẩm
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className='hidden lg:flex items-center justify-between nav-btn absolute top-2/4 -translate-y-2/4 z-10 w-full px-20 duration-300 opacity-0'>
          <div
            className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:bg-primary hover:border-primary duration-200'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:bg-primary hover:border-primary duration-200'
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </Swiper>
    </>
  )
}

export default HomeSlider
