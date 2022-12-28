import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useAuth from '~/hooks/useAuth'

import useLogout from '~/hooks/useLogout'
import { AuthorityRole } from '~/shared/enums'

const Navigation: FC = () => {
  const location = useLocation()
  const logout = useLogout()
  const { auth } = useAuth()

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
    }
  ]

  const authRoutes = [
    {
      name: 'Đăng nhập',
      path: '/dang-nhap'
    },
    {
      name: 'Đăng ký',
      path: '/dang-ky'
    }
  ]

  const [st, setSt] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSt(window.scrollY)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        setSt(0)
      })
    }
  }, [])

  const handleLogout = async () => {
    await logout()
  }

  return (
    <ul
      className={`hidden lg:flex items-center justify-center space-x-6 text-sm uppercase py-4 text-white font-bold ${
        st > 210 ? 'fixed top-0 left-0 right-0 z-[99999] bg-header-bg animate-[stuckMoveDown_0.6s]' : ''
      }`}
    >
      {/* normal route */}
      {routes.map((item, index) => {
        return (
          <li
            key={index}
            className={`relative hover:text-primary hover:after:bg-primary duration-300 after:absolute after:w-full after:h-[1px] after:top-full after:right-0 after:left-0 after:duration-300 ${
              location.pathname === item.path ? 'text-primary after:bg-primary' : ''
            }`}
          >
            <NavLink className='active' to={item.path}>
              {item.name}
            </NavLink>
          </li>
        )
      })}

      {/* auth route */}
      {!Boolean(auth?.accessToken) ? (
        authRoutes.map((item, index) => {
          return (
            <li
              key={index}
              className={`relative hover:text-primary hover:after:bg-primary duration-300 after:absolute after:w-full after:h-[1px] after:top-full after:right-0 after:left-0 after:duration-300 ${
                location.pathname === item.path ? 'text-primary after:bg-primary' : ''
              }`}
            >
              <NavLink className='active' to={item.path}>
                {item.name}
              </NavLink>
            </li>
          )
        })
      ) : (
        <>
          {/* logout btn */}

          <NavLink
            to='/thong-tin'
            className={classNames(
              'relative cursor-pointer hover:text-primary hover:after:bg-primary duration-300 after:absolute after:w-full after:h-[1px] after:top-full after:right-0 after:left-0 after:duration-300',
              {
                'text-primary after:bg-primary': Boolean(location.pathname.includes('/thong-tin'))
              }
            )}
          >
            <span className='active'>{auth?.username}</span>
          </NavLink>
          <li
            onClick={handleLogout}
            className='relative cursor-pointer hover:text-primary hover:after:bg-primary duration-300 after:absolute after:w-full after:h-[1px] after:top-full after:right-0 after:left-0 after:duration-300'
          >
            <span className='active'>đăng xuất</span>
          </li>
        </>
      )}
      {auth && auth?.roles?.includes(AuthorityRole.ADMIN) && (
        <NavLink
          to='/admin'
          className='relative cursor-pointer hover:text-primary hover:after:bg-primary duration-300 after:absolute after:w-full after:h-[1px] after:top-full after:right-0 after:left-0 after:duration-300'
        >
          <span className='active'>Admin</span>
        </NavLink>
      )}
    </ul>
  )
}

export default Navigation
