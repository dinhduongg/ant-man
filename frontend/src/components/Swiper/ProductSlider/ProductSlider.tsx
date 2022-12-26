import { FC, useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation } from 'swiper'

import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import Tippy from '@tippyjs/react'
import queryString from 'query-string'
import { NavLink } from 'react-router-dom'
import Button from '~/components/Button'
import { Product } from '~/shared/product.interface'
import { publicAxios } from '~/utils/axiosClient'
import { vietnameseCurrency } from '~/utils/utils'
import './ProductSlider.css'

interface Props {
  product?: Product
  action: string
}

const ProductSlider: FC<Props> = ({ product, action }) => {
  const swiperRef: any = useRef()

  const [products, setProducts] = useState<Product[]>([])

  const { data, refetch } = useQuery({
    queryKey: ['products/action', action],
    queryFn: () =>
      publicAxios.get(`/products/action/${action}`, {
        params: { ...product },
        paramsSerializer: {
          serialize: (params) => queryString.stringify(params)
        }
      }),
    enabled: action !== undefined
  })

  useEffect(() => {
    setProducts(data?.data)
  }, [data])

  useEffect(() => {
    refetch()
  }, [product])

  return (
    <>
      <div className='flex items-center justify-end duration-300 space-x-4 px-2'>
        <div
          className='text-[20px] text-slate-300 cursor-pointer hover:text-primary duration-200'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className='text-[20px] text-slate-300 cursor-pointer hover:text-primary duration-200'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <Swiper
        loop={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper px-1'
        speed={300}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
      >
        {products &&
          products.length !== 0 &&
          products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <div className='relative border border-[#ddd] group'>
                  <NavLink to={`/san-pham/${product.id}`} className='block border-b border-b-[#ddd]'>
                    <img className='block' src={product.image} />
                  </NavLink>
                  <div className='p-3 pb-4'>
                    <NavLink to={`/san-pham/${product.id}`} className='text-lg font-semibold text-[#3a3a3a] mt-1 mb-3'>
                      {product.title}
                    </NavLink>
                    <div className='mb-3 flex items-center justify-center'>
                      {product.sale !== 0 ?? (
                        <span className='text-sm text-primary line-through font-thin mr-2'>700.000d</span>
                      )}
                      <span className='text-sm text-primary font-black'>{vietnameseCurrency(product.price)}</span>
                    </div>
                    <Button onClick={() => alert(123)} primary custom='w-3/4 lg:w-2/4 mx-auto'>
                      Thêm vào giỏ
                    </Button>
                  </div>
                  <div className='absolute top-2 right-2 flex items-center justify-center border-2 border-slate-300 p-2 rounded-full text-slate-300 opacity-0 group-hover:opacity-100 hover:border-red-700 hover:bg-red-700 hover:text-white duration-300'>
                    <Tippy
                      offset={[0, 17]}
                      content='Thêm vào yêu thích'
                      theme='material'
                      animation='perspective'
                      duration={300}
                      placement='bottom'
                    >
                      <FontAwesomeIcon className='text-xl' icon={faHeart} />
                    </Tippy>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}

        {/* <SwiperSlide>
          <div className='relative border border-[#ddd] group'>
            <NavLink to='/dong-ho-nam' className='block border-b border-b-[#ddd]'>
              <img
                className='block'
                src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-01.png'
              />
            </NavLink>
            <div className='p-3 pb-4'>
              <NavLink to='/dong-ho-nam' className='text-lg font-semibold text-[#3a3a3a] mt-1 mb-3'>
                Classico
              </NavLink>
              <div className='mb-3 flex items-center justify-center'>
                <span className='text-sm text-primary line-through font-thin mr-2'>700.000d</span>
                <span className='text-sm text-primary font-black'>600.000d</span>
              </div>
              <Button onClick={() => alert(123)} primary custom='w-3/4 lg:w-2/4 mx-auto'>
                Thêm vào giỏ
              </Button>
            </div>
            <div className='absolute top-2 right-2 flex items-center justify-center border-2 border-slate-300 p-2 rounded-full text-slate-300 opacity-0 group-hover:opacity-100 hover:border-red-700 hover:bg-red-700 hover:text-white duration-300'>
              <Tippy
                offset={[0, 17]}
                content='Thêm vào yêu thích'
                theme='material'
                animation='perspective'
                duration={300}
                placement='bottom'
              >
                <FontAwesomeIcon className='text-xl' icon={faHeart} />
              </Tippy>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default ProductSlider
