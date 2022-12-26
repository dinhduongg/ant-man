import React, { cloneElement, FC, useEffect, useState } from 'react'
import { createSearchParams, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import Header from '~/components/Layout/components/Header'
import Footer from '~/components/Layout/components/Footer'
import MobileSort from './MobileSort'
import { Pageable, Query as IQuery } from '~/shared/interface'

interface Props {
  children: React.ReactNode | any
}

const initQuery: IQuery = {
  filters: {
    brand: 'all',
    mainSide: 'male'
  },
  pageable: {
    page: 0,
    maxPage: 10,
    sort: {
      field: 'createdAt',
      order: 'd'
    }
  }
}

const ProductLayout: FC<Props> = ({ children }) => {
  const [value, setValue] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<IQuery>(initQuery)

  const location = useLocation()
  const navigate = useNavigate()

  const prettyPathname = (pathname: string) => {
    switch (pathname) {
      case '/dong-ho-nam':
        return 'Đồng hồ nam'
      case '/dong-ho-nu':
        return 'Đồng hồ nữ'
      default:
        break
    }
  }

  const options = [
    {
      key: 'old',
      name: 'Mới nhất',
      field: 'createdAt',
      order: 'd'
    },
    {
      key: 'new',
      name: 'Theo thứ tự mặc định',
      field: 'createdAt',
      order: 'a'
    },
    {
      key: 'increase-price',
      name: 'Theo thứ tự giá: thấp đến cao',
      field: 'price',
      order: 'a'
    },
    {
      key: 'decrease-price',
      name: 'Theo thứ tự giá: cao đến thấp',
      field: 'price',
      order: 'd'
    }
  ]

  const b = [
    {
      id: 1,
      define: 'all',
      label: 'Tất cả'
    },
    {
      id: 2,
      define: 'rolex',
      label: 'rolex'
    },
    {
      id: 3,
      define: 'casio',
      label: 'casio'
    },
    {
      id: 4,
      define: 'apple',
      label: 'apple'
    }
  ]

  const handleFilters = (v: string) => {
    setQuery((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        brand: v
      },
      pageable: {
        ...prev.pageable
      } as Pageable
    }))
  }

  const handleSort = (v: string) => {
    const transType = Number(v)
    setValue(transType)
    setQuery((prev) => ({
      ...prev,
      filters: {
        ...prev.filters
      },
      pageable: {
        ...prev.pageable,
        sort: {
          field: options[transType].field,
          order: options[transType].order
        }
      } as Pageable
    }))
  }

  useEffect(() => {
    location.pathname === '/dong-ho-nam' ? (query.filters.mainSide = 'male') : (query.filters.mainSide = 'female')
  }, [])

  useEffect(() => {
    navigate(
      {
        pathname: location.pathname,
        search: `?${createSearchParams({ ...query.filters, ...query.pageable?.sort })}`
      },
      { replace: true }
    )
  }, [query.filters, query.pageable])

  return (
    <div className='overflow-hidden md:overflow-auto'>
      <Header />
      <motion.div
        className='container mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ y: '50px', opacity: 0, transition: { duration: 0.2 } }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-5 text-center'>
          <div className='text-lg uppercase'>
            <NavLink className='text-[#ccc] hover:text-black duration-300' to='/'>
              Trang chủ
            </NavLink>
            <span className='mx-2'>/</span>
            <span className='font-bold'>{prettyPathname(location.pathname)}</span>
          </div>
          <div className='block lg:hidden my-4 space-x-2' onClick={() => setIsOpen(true)}>
            <span>Lọc</span>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className='space-x-2 text-center lg:text-right'>
            <label className='hidden lg:inline-block'>Hiển thị một kết quả duy nhất</label>
            <select
              className='border-2 border-[#ccc] px-2 py-1 outline-none'
              onChange={(e) => handleSort(e.target.value)}
              value={value}
            >
              {options.map((item, index) => {
                return (
                  <option key={item.key} value={index}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-7 py-7 px-2 lg:px-0'>
          <div className='hidden lg:block'>
            <div className='border border-[#ccc] p-2'>
              <h2 className='mb-2 border-b border-b-primary font-bold'>Danh mục sản phẩm</h2>
              {b.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='flex items-center space-x-2 cursor-pointer'
                    onClick={() => handleFilters(item.define)}
                  >
                    <div className='p-1 h-5 w-5 flex items-center justify-center border border-primary text-primary'>
                      <FontAwesomeIcon
                        className={`scale-0 duration-200 ${
                          query.filters.brand.includes(item.define) ? 'scale-75' : ''
                        }`}
                        icon={faCheck}
                      />
                    </div>
                    <span>{item.label}</span>
                    <span>{query.filters.brand.includes(item.label)}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='lg:col-start-2 col-span-full'>{cloneElement(children, { query: query })}</div>
        </div>
      </motion.div>
      {/* <MobileSort
        isOpen={isOpen}
        sendToParent={(val: boolean | ((prevState: boolean) => boolean)) => setIsOpen(val)}
        categories={b}
        sendCategory={(val: any) => handleFilters(val, 'brand')}
        filter={filter}
      /> */}
      <Footer />
    </div>
  )
}

export default ProductLayout
