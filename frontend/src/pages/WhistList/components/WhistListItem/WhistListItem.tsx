import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import Button from '~/components/Button'

const WhistlistItem: FC = () => {
  return (
    <>
      <div>
        <div className='w-5 h-5 flex items-center justify-center border border-[#ddd] rounded-full'>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div>
        <div>
          <img
            className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]'
            src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png'
          />
        </div>
      </div>
      <div>Tên sản phẩm</div>
      <div>Giá</div>
      <div>còn hàng</div>
      <div className='justify-end'>
        <Button primary custom='w-auto'>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </>
  )
}

export default WhistlistItem
