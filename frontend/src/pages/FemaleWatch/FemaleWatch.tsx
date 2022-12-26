import { useQuery } from '@tanstack/react-query'
import { FC, useEffect } from 'react'

import Helmet from '~/components/Helmet'
import ProductsLap from '~/components/Product'
import { Query as IQuery } from '~/shared/interface'
import { Product } from '~/shared/product.interface'
import { publicAxios } from '~/utils/axiosClient'

interface Props {
  query: IQuery
}

const FemaleWatch: FC<Props> = ({ query }) => {
  const { data: products, refetch } = useQuery({
    queryKey: ['products', query.filters.mainSide],
    queryFn: () => publicAxios.get('/products', { params: query })
  })

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <Helmet title='Đồng hồ nữ'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {products?.data.map((product: Product) => {
          return <ProductsLap key={product.id} product={product} />
        })}
      </div>
    </Helmet>
  )
}

export default FemaleWatch
