import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

type categories = {
  id: string | number
  label: string
}

interface Props {
  isOpen: boolean
  sendToParent: any
  sendCategory: string | any
  categories: categories[]
  filter: {
    brand: string
  }
}

const MobileSort: FC<Props> = ({ isOpen, sendToParent, sendCategory, categories, filter }) => {
  return (
    <>
      <div
        className={`fixed w-9/12 h-full top-0 bottom-0 bg-white bg-opacity-90 z-50 duration-300 p-4 ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        <h2 className='font-bold text-base'>Danh mục sản phẩm</h2>
        {categories.map((item: categories) => {
          // gan kieu cho filter
          return (
            <div
              key={item.id}
              className='flex items-center space-x-2 cursor-pointer'
              onClick={() => sendCategory(item.label)}
            >
              <div className='p-1 h-5 w-5 flex items-center justify-center border border-primary text-primary'>
                <FontAwesomeIcon
                  className={`scale-0 duration-200 ${filter.brand.includes(item.label) ? 'scale-75' : ''}`}
                  icon={faCheck}
                />
              </div>
              <span>{item.label}</span>
              <span>{filter.brand.includes(item.label)}</span>
            </div>
          )
        })}
      </div>
      <div
        className={`fixed w-full right-0 top-0 bottom-0 bg-black duration-300 ${
          isOpen ? 'opacity-100 bg-opacity-60 z-10' : 'opacity-0 -z-10'
        }`}
        onClick={() => sendToParent(false)}
      >
        <div className='absolute right-0 p-2 text-3xl text-white' onClick={() => sendToParent(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </>
  )
}

export default MobileSort
