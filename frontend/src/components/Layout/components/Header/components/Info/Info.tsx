import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import Contact from '~/components/Contact'

const Info: FC = () => {
  return (
    <div className='container hidden lg:flex mx-auto text-white text-[14px] items-center justify-between py-4'>
      <div className='flex items-center'>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className='ml-2'>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</span>
        </div>
        <div className='ml-6'>
          <FontAwesomeIcon icon={faPhone} />
          <span className='ml-2'>0941356960</span>
        </div>
      </div>
      <div>
        <Contact
          link='https://www.facebook.com/dinhduong1402'
          content='theo dõi Facebook'
          icon={faFacebook}
          style={undefined}
          placement={undefined}
        />
        <Contact
          link='https://www.instagram.com/nddd_1402'
          content='theo dõi Instagram'
          icon={faInstagram}
          style='px-2'
          placement={undefined}
        />
        <Contact
          link='https://www.facebook.com/dinhduong1402'
          content='theo dõi Twitter'
          icon={faTwitter}
          style={undefined}
          placement={undefined}
        />
      </div>
    </div>
  )
}

export default Info
