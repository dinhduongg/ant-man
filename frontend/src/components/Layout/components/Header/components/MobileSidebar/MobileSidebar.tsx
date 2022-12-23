import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import MobileProductSearchResult from '../MobileProductSearchResult'
import Contact from '~/components/Contact'

interface Props {
  isOpen: boolean
  sendToParent: any
}

const MobileSidebar: FC<Props> = ({ isOpen, sendToParent }) => {
  const [searchResult, setSearchResult] = useState([1])
  const [showResult, setShowResult] = useState(true)

  const location = useLocation()

  const routes = [
    {
      name: 'Trang chủ',
      path: '/'
    },
    {
      name: 'Giới thiệu',
      path: '/gioi-thieu'
    },
    {
      name: 'Đồng hồ nam',
      path: '/dong-ho-nam'
    },
    {
      name: 'Đồng hồ nữ',
      path: '/dong-ho-nu'
    },
    {
      name: 'Blogs',
      path: '/blogs'
    },
    {
      name: 'Liên hệ',
      path: '/lien-he'
    },
    {
      name: 'Đăng nhập',
      path: '/dang-nhap'
    },
    {
      name: 'Đăng ký',
      path: '/dang-ky'
    }
  ]

  return (
    <div
      className={`lg:hidden fixed top-0 right-0 bottom-0 left-0 duration-500 ${
        isOpen ? 'bg-[#0b0b0b] bg-opacity-60 z-10' : 'bg-[#0b0b0b] bg-opacity-0 -z-10'
      }`}
      onClick={() => sendToParent(false)}
    >
      {/* close btn */}
      <div className='absolute right-0 p-2 text-3xl' onClick={() => sendToParent(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      <div
        className={`absolute w-9/12 md:w-1/3 bg-white bg-opacity-90 top-0 bottom-0 p-4 duration-500 ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className='flex h-8 bg-white pl-2 relative'>
          <input
            className='h-full flex-1 outline-none text-black bg-transparent'
            type='search'
            placeholder='Tìm kiếm...'
            autoComplete='off'
          />
          <button className='h-full bg-primary px-5'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* search history */}
        <ul className='top-full left-0 w-full max-h-[70vh] overflow-auto text-text mt-1'>
          <li onClick={() => sendToParent(false)}>
            <MobileProductSearchResult />
          </li>
        </ul>

        {/* route */}
        <ul className='items-center justify-center text-sm uppercase py-4 text-text font-bold'>
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className={`${location.pathname === item.path ? 'text-primary' : ''}`}
                onClick={() => sendToParent(false)}
              >
                <NavLink className='active block py-2' to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* social */}
        <div className='text-text text-lg'>
          <Contact link='https://www.facebook.com/dinhduong1402' content='theo dõi Facebook' icon={faFacebook} />
          <Contact
            link='https://www.instagram.com/nddd_1402'
            content='theo dõi Instagram'
            icon={faInstagram}
            style='px-2'
          />
          <Contact link='https://www.facebook.com/dinhduong1402' content='theo dõi Twitter' icon={faTwitter} />
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar
