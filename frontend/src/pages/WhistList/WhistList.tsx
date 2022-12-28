import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Helmet from '~/components/Helmet'
import { productWhist } from '~/shared/whist-list.interface'
import { WhistListItem } from './components'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'

const WhistList: FC = () => {
  const [products, setProducts] = useState<productWhist[]>([])

  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()

  useQuery({
    queryKey: ['product-wish'],
    queryFn: () => privateAxios.get(`/whist-list/${auth?.username}`),
    keepPreviousData: true,
    enabled: auth?.username !== undefined,
    onSuccess: (response) => {
      setProducts(response.data?.products)
    }
  })

  return (
    <Helmet title='Yêu thích'>
      <div className='gtable grid grid-cols-[repeat(5,auto)] my-8 px-4'>
        <h6></h6>
        <h6>Thương hiệu</h6>
        <h6>Giới tính</h6>
        <h6>Giá</h6>
        <h6></h6>
        {products.length !== 0 ? (
          products.map((product) => {
            return <WhistListItem key={product.id} product={product} />
          })
        ) : (
          <div className='col-span-5 w-full flex items-center justify-center px-6'>
            <p className='text-xl py-8'>Không có sản phẩm yêu thích</p>
          </div>
        )}
      </div>
    </Helmet>
  )
}

export default WhistList
