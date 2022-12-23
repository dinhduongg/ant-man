import { FC } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HomeSlider } from '~/components/Swiper'

interface Props {
  children: React.ReactNode
}

const SliderLayout: FC<Props> = ({ children }) => {
  return (
    <div className='overflow-hidden md:overflow-auto'>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ y: '50px', opacity: 0, transition: { duration: 0.2 } }}
      >
        <HomeSlider />
        <div className='container mx-auto'>{children}</div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default SliderLayout
