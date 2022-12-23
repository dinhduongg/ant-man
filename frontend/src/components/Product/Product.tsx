import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import cartApiServices from '~/api-services/cartApiServices'
import Button from '~/components/Button'
import useAuth from '~/hooks/useAuth'
import { Product as IProduct } from '~/shared/product.interface'
import { vietnameseCurrency } from '~/utils/utils'

interface ProductProps {
  product: IProduct
}

const ProductsLap: FC<ProductProps> = ({ product }): JSX.Element => {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const { mutate, error } = useMutation({
    mutationFn: (body: IProduct) => {
      return cartApiServices.addToCart(body)
    }
  })

  const handleAddToCart = (data: any) => {
    const product = { ...data, quantity: 1 } as any
    if (Boolean(auth?.accessToken) && Boolean(product)) {
      mutate(product, {
        onSuccess: (response) => {
          console.log(response)
          alert('Thêm vào giỏ hàng thành công')
        }
      })
      // console.log(product)
    } else {
      alert('Bạn chưa đăng nhập! Đăng nhập ngay?')
    }
  }

  return (
    <div className='relative border border-[#ddd] group'>
      <NavLink to={`/san-pham/${product.id}`} className='block border-b border-b-[#ddd]'>
        <img className={product.title} src={product.image} />
      </NavLink>
      <div className='p-3 pb-4'>
        <NavLink to={`/san-pham/${product.id}`} className='block text-center text-lg font-semibold text-[#3a3a3a] mt-1'>
          {product.title}
        </NavLink>
        <div className='mb-3 flex items-center justify-center'>
          <span className='text-sm text-primary line-through font-thin mr-2'>{vietnameseCurrency(700000)}</span>
          <span className='text-sm text-primary font-black'>{vietnameseCurrency(product.price)}</span>
        </div>
        <Button onClick={() => handleAddToCart(product)} primary custom='mx-auto w-full md:w-3/4'>
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
  )
}

export default ProductsLap
