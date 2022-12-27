import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AnimatedRoutes from './components/AnimatedRoutes'

const App: FC = () => {
  return (
    <Router>
      <div className='App'>
        <ToastContainer className='z-[99999999]' />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
