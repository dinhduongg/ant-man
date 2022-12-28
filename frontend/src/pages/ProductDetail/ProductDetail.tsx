import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import queryString from 'query-string'
import { FC, useState } from 'react'

import { useParams } from 'react-router-dom'
import Button from '~/components/Button'
import Helmet from '~/components/Helmet'
import { ProductDetailSlider } from '~/components/Swiper'
import ProductSlider from '~/components/Swiper/ProductSlider'
import useAuth from '~/hooks/useAuth'
import { Actions } from '~/shared/enums'
import { Product as IProduct } from '~/shared/product.interface'
import { publicAxios } from '~/utils/axiosClient'
import { vietnameseCurrency } from '~/utils/utils'
import { UserReview } from './components/UserReview'
import { productCart } from '~/shared/cart.interface'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { toast } from 'react-toastify'

const initialState: IProduct = {
  id: '',
  title: '',
  mainSide: 'male',
  price: 0,
  brand: '',
  rating: 0,
  numReviews: 0,
  countInStock: 0,
  sale: 0,
  soldCount: 0,
  description: '',
  image: '',
  imageGalley: [],
  createdAt: new Date(),
  updatedAt: new Date()
}

const ProductDetail: FC = () => {
  const [quantity, setQuantity] = useState(1)
  const [isDesc, setIsDesc] = useState(true)
  const [product, setProduct] = useState(initialState)

  const { id } = useParams()
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()
  const queryClient = useQueryClient()

  useQuery({
    queryKey: ['product', id],
    queryFn: () =>
      publicAxios.get(`/products/${id}`, {
        paramsSerializer: {
          serialize: (params) => queryString.stringify(params)
        }
      }),
    enabled: id !== undefined,
    onSuccess: (response) => {
      setProduct(response.data)
    }
  })

  const { mutate } = useMutation({
    mutationFn: (body: productCart) => {
      return privateAxios.post(`/carts/create/${auth?.username}`, body)
    }
  })

  const handleAddToCart = (product: IProduct) => {
    const productCart = { ...product, quantity: quantity } as unknown as productCart

    if (Boolean(auth?.accessToken) && Boolean(productCart)) {
      mutate(productCart, {
        onSuccess: () => {
          setQuantity(1)
          toast.success('Thêm vào giỏ hàng thành công')
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

  const ship = [
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghn.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghtk.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ninja-van.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-shipchung.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-viettle-post.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vn-post.jpg'
  ]

  const payment = [
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-acb.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-techcombank.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vib.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vcb.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-paypal.jpg',
    'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-mastercard.jpg'
  ]

  return (
    <Helmet title={product.title}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 px-4 lg:px-0'>
        <div className='flex flex-col'>
          <ProductDetailSlider images={product.imageGalley} />
        </div>
        <div className='h-fit'>
          <h1 className='text-2xl'>{product.title}</h1>
          <div className='w-8 bg-black h-1 rounded-full my-4'></div>
          <p className='text-primary text-2xl'>{vietnameseCurrency(product.price)}</p>
          <div className='py-4'>
            <p className='pb-4 text-[#353535]'>{product.description}</p>
            <div className='pb-2 text-[#353535]'>
              Thương hiệu: <strong>{product.brand}</strong>
            </div>
            <div className='pb-2 text-[#353535]'>
              Tags: <strong>{product.mainSide === 'male' ? 'Nam' : 'Nữ'}</strong>
            </div>
          </div>
          <div className='flex items-center mb-5'>
            <div className='mr-2'>
              <span
                className='py-2 px-3 border border-[#353535] cursor-pointer hover:bg-[#ddd]'
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </span>
              <span className='py-2 px-5 border-t border-b border-t-[#353535] border-b-[#353535]'>{quantity}</span>
              <span
                className='py-2 px-3 border border-[#353535] cursor-pointer hover:bg-[#ddd]'
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </span>
            </div>
            <Button primary custom='w-auto rounded-none py-2' onClick={() => handleAddToCart(product)}>
              Thêm vào giỏ
            </Button>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-base text-[#353535] font-bold'>Tính phí ship tự động</h2>
              <div className='grid grid-cols-3 gap-3'>
                {ship.map((item, index) => {
                  return <img key={index} src={item} alt='anh' />
                })}
              </div>
            </div>
            <div>
              <h2 className='text-base text-[#353535] font-bold'>Thanh toán</h2>
              <div className='grid grid-cols-3 gap-3'>
                {payment.map((item, index) => {
                  return <img key={index} src={item} alt='anh' />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rating + description */}
      <div className='py-8 px-4 lg:px-0 border-t border-b border-t-[#ddd] border-b-[#ddd]'>
        <div className='flex items-center space-x-1'>
          <div
            className={`border-t-2 border-t-primary border-r border-l border-[#ddd] -mb-[1px] p-2 cursor-pointer ${
              isDesc ? 'bg-white text-[rgba(17,17,17,0.85)]' : 'bg-[rgba(0,0,0,0.04)] text-[rgba(102,102,102,0.85)]'
            }`}
            onClick={() => setIsDesc(true)}
          >
            Mô tả
          </div>
          <div
            className={`border-t-2 border-t-primary border-r border-l border-[#ddd] -mb-[1px] bg-white text-black p-2 cursor-pointer ${
              !isDesc ? 'bg-white text-[rgba(17,17,17,0.85)]' : 'bg-[rgba(0,0,0,0.04)] text-[rgba(102,102,102,0.85)]'
            }`}
            onClick={() => setIsDesc(false)}
          >
            Đánh giá
          </div>
        </div>
        {isDesc ? (
          <div className='border border-[#ddd] p-7 text-[#353535]'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
              Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
              vulputate adipiscing cursus eu, suscipit id nulla.
              <br />
              <br />
            </span>
            <span>
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
              velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
              sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio
              quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
              imperdiet ligula euismod eget.
            </span>
          </div>
        ) : (
          <UserReview />
        )}
      </div>

      {/* Related products */}
      <div className='py-8 px-4 lg:px-0'>
        <h2 className='text-2xl font-bold'>Sản phẩm tương tự</h2>
        <ProductSlider product={product} action={Actions.SIMILAR} />
      </div>
    </Helmet>
  )
}

export default ProductDetail
