import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

const UserCart: FC = () => {
  const [quantity, setQuantity] = useState(1)

  const handleRemove = () => {
    alert('remove success')
  }

  return (
    <>
      <div className='text-start space-x-2 flex items-center'>
        <div className='cursor-pointer hover:opacity-60 duration-150' onClick={handleRemove}>
          <FontAwesomeIcon className='text-lg' icon={faXmarkCircle} />
        </div>
        <NavLink to='/san-pham/1' className='block w-16 h-16 lg:w-20 lg:h-20 overflow-hidden'>
          <img
            className='w-full h-full'
            src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-01-300x300.png'
          />
        </NavLink>
        <div>
          <span className='text-xs lg:text-base'>Tên sản phẩm</span>
          <p className='block lg:hidden'>1 x 700.000đ</p>
        </div>
      </div>
      <p className='hidden lg:flex items-center text-start text-2xl'>
        <span className='text-lg font-extrabold'>700000đ</span>
      </p>
      <div className='justify-end lg:justify-start'>
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
      <p className='hidden lg:flex items-center text-start text-2xl'>
        <span className='text-lg font-extrabold'>700000đ</span>
      </p>
    </>
  )
}

export default UserCart
