import { FC } from 'react'
import { faFacebookF, faInstagram, faLinkedin, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faPhone, faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'

import Button from '~/components/Button'
import Contact from '~/components/Contact'

const Footer: FC = () => {
  const location = useLocation()

  const column1 = [
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

  const column2 = [
    {
      name: 'Hướng dẫn mua hàng',
      path: '/gioi-thieu'
    },
    {
      name: 'Hướng dẫn thanh toán',
      path: '/dong-ho-nam'
    },
    {
      name: 'Chính sách bảo hành',
      path: '/dong-ho-nu'
    },
    {
      name: 'Chính sách đổi trả',
      path: '/blogs'
    },
    {
      name: 'Tư vấn khách hàng',
      path: '/lien-he'
    }
  ]

  return (
    <footer>
      <div className='container mx-auto grid grid-cols-2 py-16 border-t border-t-[#ccc]'>
        <span className='text-2xl uppercase font-bold text-[#1C1C1C]'>Đăng ký nhận thông tin</span>
        <div>
          <div className='flex h-10 relative w-3/4 rounded-sm overflow-hidden ml-auto mr-0'>
            <input
              className='h-full flex-1 p-4 outline-none text-black bg-[#f1f1f1]'
              type='text'
              placeholder='Email...'
              autoComplete='off'
            />
            <Button primary custom='h-full text-white font-bold uppercase w-auto rounded-none'>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-header-bg px-0 lg:px-4'>
        <div className='container mx-auto py-10'>
          <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 text-white'>
            {/* first column */}
            <div className='px-4 py-5 space-y-1 col-span-full md:col-span-1'>
              <h3 className='text-xl uppercase font-extrabold mb-3'>Thông tin liên hệ</h3>
              <div className='space-x-2'>
                <FontAwesomeIcon icon={faLocation} />
                <span>10.07 Cao ốc A Ngô Gia Tự, quận 10, tp Hồ Chí Minh</span>
              </div>
              <div className='space-x-2'>
                <FontAwesomeIcon icon={faPhone} />
                <span className='hover:text-primary duration-200 cursor-pointer'>0941356960</span>
              </div>
              <div className='space-x-2'>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className='hover:text-primary duration-200 cursor-pointer'>duongnd1402@gmail.com</span>
              </div>
              <div className='space-x-2'>
                <FontAwesomeIcon icon={faSkype} />
                <span className='hover:text-primary duration-200 cursor-pointer'>duongnd1402@gmail.com</span>
              </div>
              {/* social */}
              <div className='space-x-2 pt-3'>
                <Contact
                  link='https://www.facebook.com/dinhduong1402'
                  content='theo dõi Facebook'
                  icon={faFacebookF}
                  style='inline-flex items-center justify-center bg-[#3a589d] w-10 h-10 rounded-full hover:shadow-header-btn text-white hover:text-current'
                />
                <Contact
                  link='https://www.facebook.com/dinhduong1402'
                  content='theo dõi Instagram'
                  icon={faInstagram}
                  style='inline-flex items-center justify-center bg-[#3b6994] w-10 h-10 rounded-full hover:shadow-header-btn text-white hover:text-current'
                />
                <Contact
                  link='https://www.facebook.com/dinhduong1402'
                  content='theo dõi Twitter'
                  icon={faTwitter}
                  style='inline-flex items-center justify-center bg-[#2478ba] w-10 h-10 rounded-full hover:shadow-header-btn text-white hover:text-current'
                />
                <Contact
                  link='https://www.facebook.com/dinhduong1402'
                  content='theo dõi Rss'
                  icon={faRss}
                  style='inline-flex items-center justify-center bg-[#fc7600] w-10 h-10 rounded-full hover:shadow-header-btn text-white hover:text-current'
                />
                <Contact
                  link='https://www.facebook.com/dinhduong1402'
                  content='theo dõi LinkedIn'
                  icon={faLinkedin}
                  style='inline-flex items-center justify-center bg-[#0072b7] w-10 h-10 rounded-full hover:shadow-header-btn text-white hover:text-current'
                />
              </div>
            </div>

            {/* second column */}
            <div className='px-4 py-5 space-y-1 col-span-2 md:col-span-1'>
              <h3 className='text-xl uppercase font-extrabold mb-3'>Liên kết</h3>
              <ul className='space-y-1'>
                {column1.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`hover:text-primary duration-200 ${
                        location.pathname === item.path ? 'text-primary' : ''
                      }`}
                    >
                      <NavLink to={item.path} className='active'>
                        {item.name}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* third column */}
            <div className='px-4 py-5 space-y-1 col-span-2 md:col-span-1'>
              <h3 className='text-xl uppercase font-extrabold mb-3'>Hỗ trợ</h3>
              <ul className='space-y-1'>
                {column2.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`hover:text-primary duration-200 ${
                        location.pathname === item.path ? 'text-primary' : ''
                      }`}
                    >
                      <NavLink to={item.path} className='active'>
                        {item.name}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* fouth column */}
            <div className='px-4 py-5 col-span-full lg:col-span-1'>
              <h3 className='text-xl uppercase font-extrabold mb-3'>Tải ứng dụng trên</h3>
              <p className='text-sm mb-4'>Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.</p>
              <div className='space-y-3'>
                <NavLink to='/' className='block'>
                  <img src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg' />
                </NavLink>
                <NavLink to='/' className='block'>
                  <img src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-t-slate-50'>
          <div className='container mx-auto py-10 flex items-center justify-between flex-col-reverse lg:flex-row'>
            <span className='text-white px-8 lg:px-0 text-center'>
              {' '}
              © Bản quyền thuộc về . Thiết kế website MonaMedia Mona Media
            </span>
            <img
              className='mb-5'
              src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-payment.png'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
