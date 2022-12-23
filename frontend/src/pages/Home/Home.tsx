import { FC } from 'react'
import Helmet from '~/components/Helmet'
import { Category, Galley, Selling, Trending } from './components'

const Home: FC = () => {
  return (
    <Helmet title='Trang chủ'>
      <Trending />
      <Selling />
      <Category />
      <Galley />
    </Helmet>
  )
}

export default Home
