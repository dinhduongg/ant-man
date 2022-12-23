import { FC } from 'react'
import Helmet from '~/components/Helmet'

const Missing: FC = () => {
  return (
    <Helmet title='Missing'>
      <h2 className='text-2xl text-center uppercase font-bold py-28'>404: the page is not exist</h2>
    </Helmet>
  )
}

export default Missing
