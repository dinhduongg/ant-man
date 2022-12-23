import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const CartItem: FC = () => {
  return (
    <div className='flex items-center justify-between border-b border-black-900'>
      <Link to='/' className='flex items-center space-x-2'>
        <img
          className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]'
          src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png'
        />
        <span>
          <p>Casio</p>
          <p>1 x 700000đ</p>
        </span>
      </Link>
      <div className='cursor-pointer hover:opacity-70 duration-200'>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>
    </div>
  )
}

export default CartItem
