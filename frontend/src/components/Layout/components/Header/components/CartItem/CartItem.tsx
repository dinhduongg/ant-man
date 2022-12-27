import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { productCart } from '~/shared/cart.interface'
import { vietnameseCurrency } from '~/utils/utils'

interface Props {
  product: productCart
}

const CartItem: FC<Props> = ({ product }) => {
  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()
  const queryClient = useQueryClient()

  const { mutate: deleteFromCart } = useMutation({
    mutationFn: (id: string) => {
      return privateAxios.delete(`/carts/delete/${auth?.username}/${id}`)
    }
  })

  const handleRemove = (id: string) => {
    deleteFromCart(id, {
      onSuccess: () => {
        toast.success('Xóa thành công', {
          position: 'top-right'
        })
        queryClient.invalidateQueries({ queryKey: ['cart', auth?.username], exact: true })
      }
    })
  }

  return (
    <div className='flex items-center justify-between border-b border-black-900'>
      <Link to={`/san-pham/${product.id}`} className='flex items-center space-x-2'>
        <img className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]' src={product.image} />
        <span>
          <p>{product.name}</p>
          <p>
            {product.quantity} x {vietnameseCurrency(product.price)}
          </p>
        </span>
      </Link>
      <div className='cursor-pointer hover:opacity-70 duration-200' onClick={() => handleRemove(product.id)}>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>
    </div>
  )
}

export default CartItem
