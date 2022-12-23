import { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const Popper: FC<Props> = ({ children }) => {
  return (
    <div className='w-full max-h-[70vh] rounded-lg shadow-md text-black bg-[rgba(255,255,255,0.95)] overflow-auto'>
      {children}
    </div>
  )
}

export default Popper
