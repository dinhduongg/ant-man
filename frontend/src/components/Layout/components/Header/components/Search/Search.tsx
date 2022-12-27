import { FC, useState } from 'react'
import { faBars, faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { Link } from 'react-router-dom'

import Popper from '~/components/Popper'
import CartItem from '../CartItem'
import Product from '../MobileProductSearchResult/MobileProductSearchResult'
import Button from '~/components/Button'
import MobileSidebar from '../MobileSidebar'
import Mobilecart from '../MobileCart'
import { useQuery } from '@tanstack/react-query'
import useAuth from '~/hooks/useAuth'
import usePrivateAxios from '~/hooks/usePrivateAxios'
import { productCart } from '~/shared/cart.interface'

const Search: FC = () => {
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const { auth } = useAuth()
  const privateAxios = usePrivateAxios()

  const { data: carts } = useQuery({
    queryKey: ['cart', auth?.username],
    queryFn: () => privateAxios.get(`/carts/${auth?.username}`),
    keepPreviousData: true,
    enabled: auth?.username !== undefined
  })

  return (
    <div className='border-t border-b border-header-border py-0 lg:py-5'>
      <div className='container md:px-4 mx-auto text-white text-[14px] flex items-center justify-between'>
        <div className='block lg:hidden text-[30px]' onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <MobileSidebar
          isOpen={isOpen}
          sendToParent={(val: boolean | ((prevState: boolean) => boolean)) => setIsOpen(val)}
        />

        <Link to='/' className='inline-block'>
          <img
            width='200'
            height='100'
            src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png'
            alt='Đồng hồ Đình Dương'
          />
        </Link>

        <Tippy
          interactive
          visible={showResult && searchResult.length > 0}
          placement='bottom'
          onClickOutside={() => setShowResult(false)}
          render={(attrs) => (
            <div className='w-[512px]' tabIndex={-1} {...attrs}>
              <Popper>
                <Product />
              </Popper>
            </div>
          )}
        >
          <div className='hidden lg:flex w-[512px] h-10 bg-white pl-2 rounded-md'>
            <input
              className='h-full flex-1 outline-none text-black bg-transparent'
              type='search'
              placeholder='Tìm kiếm...'
              autoComplete='off'
              onFocus={() => setShowResult(true)}
            />
            <button className='h-full bg-primary px-5 hover:shadow-header-btn duration-200 rounded-tr-md rounded-br-md'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>

        <div>
          <Link
            to='/yeu-thich'
            className='hidden lg:inline-block text-[30px] hover:text-red-600 duration-200 cursor-pointer'
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <div className='inline-block text-[20px] lg:ml-6 relative cursor-pointer group'>
            <FontAwesomeIcon icon={faCartShopping} className='text-[30px]' onClick={() => setIsOpenCart(true)} />
            <ul className='absolute hidden lg:group-hover:block min-w-[260px] top-[150%] -right-5 rounded-md animate-[fadeIn_0.2s_ease-out] bg-white text-black text-base p-4 shadow-xl after:absolute after:h-0 after:w-0 after:border-x-[14px] after:border-x-transparent after:border-b-[16px] after:border-b-white after:-top-3 after:right-4 before:absolute before:h-10 before:w-1/4 before:-top-6 before:right-0 z-[9999]'>
              <div className='max-h-[50vh] overflow-auto'>
                {carts?.data.products.length === 0 ? (
                  <p>Chưa có sản phẩm trong giỏ hàng</p>
                ) : (
                  <>
                    {carts?.data.products.map((product: productCart) => {
                      return <CartItem key={product.id} product={product} />
                    })}
                    <Button to='/gio-hang' full primary custom='my-2'>
                      Xem giỏ hàng
                    </Button>
                    <Button to='/' full primary>
                      Thanh toán
                    </Button>
                  </>
                )}
              </div>
            </ul>

            {/* mobile cart */}
            <Mobilecart
              isOpenCart={isOpenCart}
              sendToParent={(val: boolean | ((prevState: boolean) => boolean)) => setIsOpenCart(val)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
