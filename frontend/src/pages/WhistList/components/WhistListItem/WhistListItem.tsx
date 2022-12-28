import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '~/components/Button'
import { productWhist } from '~/shared/whist-list.interface'
import { vietnameseCurrency } from '~/utils/utils'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import useAuth from '~/hooks/useAuth'
import { toast } from 'react-toastify'
import { productCart } from '~/shared/cart.interface'
import { Product as IProduct } from '~/shared/product.interface'

interface Props {
  product: productWhist
}

const WhistlistItem: FC<Props> = ({ product }) => {
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()
  const queryClient = useQueryClient()

  const favorite = useMutation({
    mutationFn: (id: string) => {
      return privateAxios.delete(`/whist-list/delete/${auth?.username}/${id}`)
    }
  })

  const handleRemoveFavorite = (id: string) => {
    favorite.mutate(id, {
      onSuccess: () => {
        toast.success('Thành công')
        queryClient.invalidateQueries({ queryKey: ['product-wish'], exact: true })
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message)
      }
    })
  }

  const cart = useMutation({
    mutationFn: (body: productCart) => {
      return privateAxios.post(`/carts/create/${auth?.username}`, body)
    }
  })

  const handleAddToCart = (data: productWhist) => {
    const cartProduct = { ...data, quantity: 1 } as unknown as productCart
    if (Boolean(auth?.accessToken) && Boolean(cartProduct)) {
      cart.mutate(cartProduct, {
        onSuccess: () => {
          toast.success('Đã thêm vào giỏ hàng')
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
      <div>
        <div
          className='w-5 h-5 flex items-center justify-center border border-[#ddd] rounded-full cursor-pointer hover:text-red-500'
          onClick={() => handleRemoveFavorite(product.id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <NavLink to={`/san-pham/${product.id}`}>
          <img className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]' src={product.image} />
        </NavLink>
        <span>{product.name}</span>
      </div>
      <div>{product.brand}</div>
      <div>{product.mainSide === 'male' ? 'Đồng hồ nam' : 'Đồng hồ nữ'}</div>
      <div>{vietnameseCurrency(product.price)}</div>
      <div className='justify-end'>
        <Button primary custom='w-auto' onClick={() => handleAddToCart(product)}>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </>
  )
}

export default WhistlistItem
