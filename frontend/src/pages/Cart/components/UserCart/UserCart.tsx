import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { productCart } from '~/shared/cart.interface'
import { cartType } from '~/shared/enums'
import { vietnameseCurrency } from '~/utils/utils'

interface Props {
  product: productCart
  isFetching: boolean
}

const UserCart: FC<Props> = ({ product, isFetching }) => {
  const [data, setData] = useState(product)
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (body: Partial<productCart> & { type: string }) => {
      return privateAxios.patch(`/carts/update/${auth?.username}`, body)
    }
  })

  const { mutate: deleteFromCart } = useMutation({
    mutationFn: (id: string) => {
      return privateAxios.delete(`/carts/delete/${auth?.username}/${id}`)
    }
  })

  const handleUpdateCart = (type: string) => {
    mutate(
      { ...data, type },
      {
        onSuccess: () => {
          toast.success('Cập nhật thành công')
          queryClient.invalidateQueries({ queryKey: ['cart', auth?.username], exact: true })
        }
      }
    )
  }

  const handleRemove = (id: string) => {
    deleteFromCart(id, {
      onSuccess: () => {
        toast.success('Bỏ khỏi giỏ hàng thành công')
        queryClient.invalidateQueries({ queryKey: ['cart', auth?.username], exact: true })
      }
    })
  }

  return (
    <>
      <div className='text-start space-x-2 flex items-center'>
        <NavLink to={`/san-pham/${product.id}`} className='block w-16 h-16 lg:w-20 lg:h-20 overflow-hidden'>
          <img className='w-full h-full' src={product.image} />
        </NavLink>
        <div>
          <span className='text-xs lg:text-base'>{product.name}</span>
          <p className='block lg:hidden'>
            {product.quantity} x {vietnameseCurrency(product.price)}
          </p>
        </div>
      </div>
      <p className='hidden lg:flex items-center text-start text-2xl'>
        <span className='text-lg font-extrabold'>{vietnameseCurrency(product.price)}</span>
      </p>
      <div className='justify-end lg:justify-start'>
        <span
          className='py-2 px-3 border border-[#353535] cursor-pointer hover:bg-[#ddd]'
          onClick={() => handleUpdateCart(cartType.decrease)}
        >
          -
        </span>
        <span className='py-2 px-5 border-t border-b border-t-[#353535] border-b-[#353535]'>{product.quantity}</span>
        <span
          className='py-2 px-3 border border-[#353535] cursor-pointer hover:bg-[#ddd]'
          onClick={() => handleUpdateCart(cartType.increase)}
        >
          +
        </span>
      </div>
      <p className='hidden lg:flex items-center text-start text-2xl'>
        <span className='text-lg font-extrabold'>{vietnameseCurrency(product.totalMoney)}</span>
      </p>
      <div>
        <div className='cursor-pointer hover:opacity-60 duration-150 h-fit' onClick={() => handleRemove(product.id)}>
          <FontAwesomeIcon className='text-lg' icon={faXmarkCircle} />
        </div>
      </div>
    </>
  )
}

export default UserCart
