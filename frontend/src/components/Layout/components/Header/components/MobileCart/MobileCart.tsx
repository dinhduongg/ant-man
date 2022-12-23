import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import Button from '~/components/Button'
import CartItem from '../MobileCartItem'

interface Props {
  isOpenCart: boolean
  sendToParent: any
}

const Mobilecart: FC<Props> = ({ isOpenCart, sendToParent }) => {
  return (
    <div
      className={`block lg:hidden fixed top-0 right-0 bottom-0 left-0 duration-500 ${
        isOpenCart ? 'bg-[#0b0b0b] bg-opacity-60 z-10' : 'bg-[#0b0b0b] bg-opacity-0 -z-10'
      }`}
      onClick={() => sendToParent(false)}
    >
      <div
        className={`absolute w-9/12 md:w-1/3 bg-white bg-opacity-90 top-0 bottom-0 p-4 duration-500 ${
          isOpenCart ? 'right-0' : '-right-full'
        }`}
      >
        {/* close btn */}
        <div
          className={`fixed top-0 right-0 p-2 text-3xl text-text z-10 ${isOpenCart ? 'block' : 'hidden'}`}
          onClick={() => sendToParent(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className='text-text'>
          <h1 className='text-center text-black uppercase font-bold pt-4'>Giỏ hàng</h1>
          <div className='w-1/6 h-1 bg-text rounded-full mx-auto my-5'></div>
          <p className='text-center'>Chưa có sản phẩm trong giỏ hàng</p>
          <ul className='max-h-[50vh] overflow-auto'>
            <li onClick={() => sendToParent(false)}>
              <CartItem />
            </li>
            <li onClick={() => sendToParent(false)}>
              <CartItem />
            </li>
            <li onClick={() => sendToParent(false)}>
              <CartItem />
            </li>
          </ul>
          <div className='text-center border-t border-t-primary border-b border-b-primary py-3'>
            <span className='text-primary font-semibold'>Tổng tiền: </span>
            <span>700000đ</span>
          </div>
          <Button to='/gio-hang' full primary custom='my-2' onClick={() => sendToParent(false)}>
            Xem giỏ hàng
          </Button>
          <Button to='/' full primary onClick={() => sendToParent(false)}>
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Mobilecart
