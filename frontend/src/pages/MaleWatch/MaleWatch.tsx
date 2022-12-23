import { useQuery } from '@tanstack/react-query'
import { FC, useEffect } from 'react'

import productApiServices from '~/api-services/productApiServices'
import Helmet from '~/components/Helmet'
import ProductsLap from '~/components/Product'
import { Query as IQuery } from '~/shared/interface'

interface Props {
  query: IQuery
}

const MaleWatch: FC<Props> = ({ query }) => {
  const { data: products, refetch } = useQuery({
    queryKey: ['products', query.filters.mainSide],
    queryFn: () => productApiServices.getProducts(query)
  })

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <Helmet title='Đồng hồ nam'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {/* {products?.data.products.map((product, index) => {
          return <ProductsLap key={index} product={product} />
        })} */}
        123
      </div>
    </Helmet>
  )
}

export default MaleWatch
