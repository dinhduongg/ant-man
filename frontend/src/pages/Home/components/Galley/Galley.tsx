import { FC, useState } from 'react'

const Galley: FC = () => {
  const [id, setId] = useState('phobien')

  const options = [
    {
      name: 'Sản phẩm phổ biến',
      id: 'phobien'
    },
    {
      name: 'Sản phẩm khuyến mãi',
      id: 'khuyenmai'
    },
    {
      name: 'Sản phẩm mới',
      id: 'moi'
    }
  ]

  return (
    <div className='py-16 px-4 lg:px-0'>
      <div className='block lg:flex items-center space-x-0 lg:space-x-6'>
        {options.map((item) => {
          return (
            <h2
              key={item.id}
              onClick={() => setId(item.id)}
              className={`mb-3 text-2xl font-bold cursor-pointer hover:text-primary duration-200 ${
                item.id == id ? 'text-primary' : ''
              }`}
            >
              {item.name}
            </h2>
          )
        })}
      </div>
      <div>{id}</div>
    </div>
  )
}

export default Galley
