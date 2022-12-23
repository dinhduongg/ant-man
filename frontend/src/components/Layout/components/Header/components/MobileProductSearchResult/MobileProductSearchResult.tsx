import { FC } from 'react'
import { Link } from 'react-router-dom'

const Product: FC = () => {
  return (
    <Link to='/'>
      <div className='flex items-center justify-between p-2 border-b border-b-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.05)]'>
        <div className='flex items-center space-x-2'>
          <img
            width='40'
            height='40'
            className='rounded-full'
            src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-16-150x150.jpg'
          />
          <span className='font-bold'>Đồng hồ 10</span>
        </div>
        <span>700000đ</span>
      </div>
    </Link>
  )
}

export default Product
