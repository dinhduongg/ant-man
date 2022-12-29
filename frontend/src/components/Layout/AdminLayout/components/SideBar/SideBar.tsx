import { faSignOut, faClock, faClockFour, faUser, faCreditCard, faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideBar: FC = () => {
  const [draw, setDraw] = useState(false)

  const routes = [
    { path: '/admin/dong-ho-nam', name: 'Đồng hồ nam', icon: faClock },
    { path: '/admin/dong-ho-nu', name: 'Đồng hồ nữ', icon: faClockFour },
    { path: '/admin/thuong-hieu', name: 'Thương hiệu', icon: faCodeCompare },
    { path: '/admin/hoa-don', name: 'Hóa đơn', icon: faCreditCard },
    { path: '/admin/nguoi-dung', name: 'Người dùng', icon: faUser }
  ]

  return (
    <div
      className={classNames(
        'fixed h-full border-t bg-neutral-700 border-r left-0 top-0 z-10 transition-all overflow-x-hidden rounded-tr-lg group duration-300 z-[999]',
        {
          'w-64': draw,
          'w-14': !draw
        }
      )}
      onMouseOver={() => setDraw(true)}
      onMouseLeave={() => setDraw(false)}
    >
      <ul className='flex flex-col space-y-2 pt-4 font-medium w-64 text-neutral-500'>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <NavLink to={route.path} className='flex items-center hover:text-red-500'>
                <FontAwesomeIcon className='w-10 h-10 mx-2' icon={route.icon} />
                <span>{route.name}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className='flex flex-col justify-end space-y-2 pt-4 font-medium w-64 text-neutral-500'>
        <div className='flex items-center hover:text-red-500 cursor-pointer'>
          <FontAwesomeIcon className='w-10 h-10 mx-2' icon={faSignOut} />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  )
}

export default SideBar
