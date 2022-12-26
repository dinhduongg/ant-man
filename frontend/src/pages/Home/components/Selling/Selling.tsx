import { FC } from 'react'
import ProductSlider from '~/components/Swiper/ProductSlider'
import { Actions } from '~/shared/enums'

const Selling: FC = () => {
  return (
    <div className='py-16 px-4 lg:px-0'>
      <h2 className='mb-3 text-2xl font-bold'>Sản phẩm bán chạy</h2>
      <ProductSlider action={Actions.SOLDCOUNT} />
    </div>
  )
}

export default Selling
