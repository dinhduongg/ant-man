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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Tippy from '@tippyjs/react'
import queryString from 'query-string'
import { NavLink } from 'react-router-dom'
import Button from '~/components/Button'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { Product } from '~/shared/product.interface'
import { publicAxios } from '~/utils/axiosClient'
import { vietnameseCurrency } from '~/utils/utils'
import './ProductSlider.css'
import { toast } from 'react-toastify'

interface Props {
  product?: Product
  action: string
}

const ProductSlider: FC<Props> = ({ product, action }) => {
  const swiperRef: any = useRef()
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()
  const queryClient = useQueryClient()

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
    enabled: action !== undefined,
    onSuccess: () => {}
  })

  useEffect(() => {
    setProducts(data?.data)
  }, [data])

  useEffect(() => {
    refetch()
  }, [product])

  const favorive = useMutation({
    mutationFn: (body: Product) => {
      return privateAxios.post(`/whist-list/create/${auth?.username}`, body)
    }
  })

  const handleFavorite = (product: Product) => {
    if (Boolean(auth?.accessToken) && Boolean(product)) {
      favorive.mutate(product, {
        onSuccess: () => {
          toast.success('Đã thêm vào danh sách yêu thích')
          queryClient.invalidateQueries({ queryKey: ['cart', auth?.username], exact: true })
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message)
        }
      })
    } else {
      alert('Bạn chưa đăng nhập! Đăng nhập ngay?')
    }
  }

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
                  {/* <NavLink to={`/san-pham/${product.id}`} className='block border-b border-b-[#ddd]'> */}
                  <img className='block' src={product.image} />
                  {/* </NavLink> */}
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
                    <Button to={`/san-pham/${product.id}`} primary custom='w-3/4 lg:w-2/3 mx-auto'>
                      xem sản phẩm
                    </Button>
                  </div>
                  <div
                    onClick={() => handleFavorite(product)}
                    className='absolute top-2 right-2 flex items-center justify-center border-2 border-slate-300 p-2 rounded-full text-slate-300 opacity-0 group-hover:opacity-100 hover:border-red-700 hover:bg-red-700 hover:text-white duration-300'
                  >
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
      </Swiper>
    </>
  )
}

export default ProductSlider
