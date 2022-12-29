import { FC } from 'react'
import SideBar from './components/SideBar'

interface Props {
  children: React.ReactNode | any
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div className='ml-16'>{children}</div>
    </div>
  )
}

export default AdminLayout
