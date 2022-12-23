import { FC } from 'react'
import { faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '~/components/Button'
import Helmet from '~/components/Helmet'

const Contact: FC = () => {
  return (
    <Helmet title='Liên hệ'>
      <div className='px-4 lg:px-0 py-2'>
        <div className='py-7'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74570.3791013097!2d106.67956739444085!3d10.80190730307513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b8a072901%3A0x2fb4502ebd044212!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1666687963640!5m2!1svi!2s'
            className='w-full'
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 lg:space-y-0'>
          <div className='flex'>
            <div className='w-10 h-10 bg-primary flex items-center justify-center text-white'>
              <FontAwesomeIcon icon={faMapLocation} />
            </div>
            <div className='pl-4'>
              <h3 className='text-xl mb-2 font-bold'>Địa chỉ</h3>
              <p>319 C16 Lý Thường Kiệt,</p>
              <p>Phường 15, Quận 11, Tp.HCM</p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-10 bg-primary flex items-center justify-center text-white'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className='pl-4'>
              <h3 className='text-xl mb-2 font-bold'>Điện thoại:</h3>
              <span className='hover:text-primary duration-200 cursor-pointer font-bold'>1900 636 648</span>
              <br />
              <p>Bấm 109 - phòng kinh doanh</p>
              <p>Bấm 103 - phòng kỹ thuật</p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-10 bg-primary flex items-center justify-center text-white'>
              <FontAwesomeIcon icon={faMailchimp} />
            </div>
            <div className='pl-4'>
              <h3 className='text-xl mb-2 font-bold'>Email:</h3>
              <p className='hover:text-primary duration-200 cursor-pointer'>duongnd1402@gmail.com</p>
              <p className='hover:text-primary duration-200 cursor-pointer'>leduongdatly@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/4 mx-auto my-7'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
            <div className='py-1'>
              <input
                className='w-full px-2 py-1 outline-none bg-[#f1f1f1] border border-transparent focus:border-[#f8b742] focus:shadow-input-shadow'
                type='text'
                placeholder='Họ và tên'
              />
            </div>
            <div className='py-1'>
              <input
                className='w-full px-2 py-1 outline-none bg-[#f1f1f1] border border-transparent focus:border-[#f8b742] focus:shadow-input-shadow'
                type='text'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
            <div className='py-1'>
              <input
                className='w-full px-2 py-1 outline-none bg-[#f1f1f1] border border-transparent focus:border-[#f8b742] focus:shadow-input-shadow'
                type='number'
                placeholder='Số điện thoại'
              />
            </div>
            <div className='py-1'>
              <input
                className='w-full px-2 py-1 outline-none bg-[#f1f1f1] border border-transparent focus:border-[#f8b742] focus:shadow-input-shadow'
                type='text'
                placeholder='Địa chỉ'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 py-1 pb-2'>
            <textarea
              className='col-span-full w-full px-2 py-1 outline-none bg-[#f1f1f1] border border-transparent focus:border-[#f8b742] focus:shadow-input-shadow'
              placeholder='Lời nhắn'
              rows={4}
            />
          </div>
          <Button primary custom='w-2/4 mx-auto'>
            Gửi
          </Button>
        </div>
      </div>
    </Helmet>
  )
}

export default Contact
