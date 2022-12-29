import { NavLink } from 'react-router-dom'

const unauthorized = () => {
  return (
    <div>
      <span>Bạn không được phép vào đây</span>
      <NavLink to='/'>Về trang chủ</NavLink>
    </div>
  )
}

export default unauthorized
