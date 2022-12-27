import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import Tippy from '@tippyjs/react'
import queryString from 'query-string'
import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '~/components/Button'
import { Actions } from '~/shared/enums'
import { Product } from '~/shared/product.interface'
import { publicAxios } from '~/utils/axiosClient'
import { vietnameseCurrency } from '~/utils/utils'

const Galley: FC = () => {
  const [action, setAction] = useState(Actions.POPULAR)
  const [products, setProducts] = useState<Product[]>([])

  const options = [
    {
      name: 'Sản phẩm phổ biến',
      action: Actions.POPULAR
    },
    {
      name: 'Sản phẩm khuyến mãi',
      action: Actions.SALE
    },
    {
      name: 'Sản phẩm mới',
      action: Actions.NEW
    }
  ]

  const { data } = useQuery({
    queryKey: ['products/action', action],
    queryFn: () =>
      publicAxios.get(`/products/action/${action}`, {
        paramsSerializer: {
          serialize: (params) => queryString.stringify(params)
        }
      }),
    enabled: action !== undefined,
    staleTime: 60 * 1000
  })

  useEffect(() => {
    setProducts(data?.data)
  }, [data])

  return (
    <div className='py-16 px-4 lg:px-0'>
      <div className='block lg:flex items-center space-x-0 lg:space-x-6'>
        {options.map((item) => {
          return (
            <h2
              key={item.action}
              onClick={() => setAction(item.action)}
              className={`mb-3 text-2xl font-bold cursor-pointer hover:text-primary duration-200 ${
                item.action == action ? 'text-primary' : ''
              }`}
            >
              {item.name}
            </h2>
          )
        })}
      </div>
      <div>
        <div className='grid grid-cols-6 gap-4'>
          {products &&
            products.length !== 0 &&
            products.map((product) => {
              return (
                <div className='relative border border-[#ddd] group' key={product.id}>
                  <NavLink to={`/san-pham/${product.id}`} className='block border-b border-b-[#ddd]'>
                    <img className='block' src={product.image} />
                  </NavLink>
                  <div className='p-3 pb-4'>
                    <NavLink
                      to={`/san-pham/${product.id}`}
                      className='text-lg block text-center font-semibold text-[#3a3a3a] mt-1 mb-3'
                    >
                      {product.title}
                    </NavLink>
                    <div className='mb-3 flex items-center justify-center'>
                      {product.sale !== 0 && (
                        <span className='text-sm text-primary line-through font-thin mr-2'>{product.sale}</span>
                      )}
                      <span className='text-sm text-primary font-black'>{vietnameseCurrency(product.price)}</span>
                    </div>
                    <Button to={`/san-pham/${product.id}`} primary custom='w-3/4 mx-auto'>
                      Chi tiết
                    </Button>
                  </div>
                  <div
                    onClick={() => alert(123)}
                    className='absolute top-2 right-2 flex items-center justify-center border-2 border-slate-300 p-2 rounded-full text-slate-300 opacity-0 group-hover:opacity-100 hover:border-red-700 hover:bg-red-700 hover:text-white duration-300'
                  >
                    <Tippy
                      offset={[0, 17]}
                      content='Thêm vào yêu thích'
                      theme='material'
                      animation='perspective'
                      duration={300}
                      placement='bottom'
                    >
                      <FontAwesomeIcon className='text-xl' icon={faHeart} />
                    </Tippy>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Galley
