import { FC } from 'react'
import Helmet from '~/components/Helmet'
import { WhistListItem } from './components'

const WhistList: FC = () => {
  return (
    <Helmet title='Yêu thích'>
      <div className='gtable grid grid-cols-[5%_20%_15%_15%_15%_30%] my-8'>
        <h6></h6>
        <h6></h6>
        <h6>Tên sản phẩm</h6>
        <h6>Giá</h6>
        <h6>Trạng thái</h6>
        <h6></h6>
        <WhistListItem />
      </div>
    </Helmet>
  )
}

export default WhistList
