import { FC } from 'react'
import { motion } from 'framer-motion'

import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const ParallaxLayout: FC<Props> = ({ children }) => {
  return (
    <div className='overflow-hidden md:overflow-auto'>
      <Header />
      <motion.div
        className='mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ y: '50px', opacity: 0, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  )
}

export default ParallaxLayout
