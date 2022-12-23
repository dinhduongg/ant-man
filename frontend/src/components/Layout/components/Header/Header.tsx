import { FC } from 'react'
import { HeaderInfo, HeaderNav, HeaderSearch } from './components'

const Header: FC = () => {
  return (
    <header className='bg-header-bg px-4 md:px-0'>
      {/* header info */}
      <HeaderInfo />

      {/* header search */}
      <HeaderSearch />

      {/* header navigation */}
      <HeaderNav />
    </header>
  )
}

export default Header
