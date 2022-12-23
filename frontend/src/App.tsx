import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'

const App: FC = () => {
  return (
    <Router>
      <div className='App'>
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
