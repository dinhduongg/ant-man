import { FC } from 'react'
import { faArrowLeftLong, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '~/components/Button'
import Helmet from '~/components/Helmet'
import { UserCart } from './components'

const Cart: FC = () => {
  return (
    <Helmet title='Giỏ hàng'>
      <div className='grid grid-col-1 lg:grid-cols-5 gap-0 lg:gap-6 py-7 px-2'>
        <div className='col-span-1 lg:col-span-3'>
          <div className='gtable grid grid-cols-2 lg:grid-cols-[40%_20%_20%_20%] px-1 pb-1 pt-4'>
            <h6 className='uppercase'>Sản phẩm</h6>
            <h6 className='hidden lg:block uppercase'>Giá</h6>
            <h6 className='uppercase text-end lg:text-start'>Số lượng</h6>
            <h6 className='hidden lg:block uppercase'>Tổng</h6>
            {/* loop here */}
            {/* <UserCart /> */}
          </div>
          <div className='border-r border-r-[#ccc] border-b border-b-[#ccc] border-l border-l-[#ccc] text-center p-6'>
            Giỏ hàng trống trơn
          </div>
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start space-x-0 lg:space-x-4 space-y-2 lg:space-y-0 pt-4'>
            <Button to='/yeu-thich' outline custom='w-auto'>
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span className='ml-2'>Tiếp tục xem sản phẩm</span>
            </Button>
            <Button primary disabled custom='w-auto'>
              Cập nhật giỏ hàng
            </Button>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 col-span-1 lg:col-span-2'>
          <div className='gtable grid grid-cols-1 p-4'>
            <h6>Tổng số lương</h6>
            <div className='!py-4 flex items-center justify-between'>
              <span className='text-lg'>Tổng phụ</span>
              <span className='text-lg font-bold'>700.000đ</span>
            </div>
            <div className='!py-4 flex items-center justify-between'>
              <span className='text-lg'>Mã giảm giá</span>
              <span className='text-lg font-bold'>GIAM50</span>
            </div>
            <div className='!py-4 flex items-center justify-between'>
              <span className='text-lg'>Tổng</span>
              <span className='text-lg font-bold'>650.000đ</span>
            </div>
            <Button to='/thanh-toan' primary custom='rounded-none'>
              Tiến hành thanh toán
            </Button>
            <div className='!py-4 flex items-center space-x-2'>
              <FontAwesomeIcon className='opacity-60 text-lg' icon={faTag} />
              <span className='text-lg'>Phiếu ưu đãi</span>
            </div>
            <div className='!py-4'>
              <input
                className='border border-[#ddd] outline-none w-full p-2 text-base'
                type='text'
                placeholder='Nhập mã ưu đãi'
              />
            </div>
            <Button custom='border border-[#ddd] rounded-none bg-[#f9f9f9] hover:shadow-header-btn text-[#666]'>
              Áp dụng
            </Button>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
