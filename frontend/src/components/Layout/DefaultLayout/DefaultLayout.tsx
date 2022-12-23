import { FC } from 'react'
import { motion } from 'framer-motion'

import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className='overflow-hidden md:overflow-auto'>
      <Header />
      <motion.div
        className='container mx-auto'
        initial={{ y: '50px', opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        exit={{ y: '50px', opacity: 0, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
