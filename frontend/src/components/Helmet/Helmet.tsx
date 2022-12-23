import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const Helmet: FC<Props> = ({ title, children }) => {
  const [st, setSt] = useState<number>(0)

  useEffect(() => {
    document.title = 'Watch - ' + title
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [title])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSt(window.scrollY)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        setSt(0)
      })
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {/* <div className={`fixed bottom-6 right-6 w-16 h-16 border-2 border-primary rounded-full bg-primary flex items-center justify-center cursor-pointer font-bold text-white hover:bg-white hover:text-primary duration-300 ${st >= 300 ? 'opacity-100 z-[9999]' : 'opacity-0 -z-10'}`} onClick={handleScrollTop}>Top</div> */}
      <div
        className={classNames(
          'fixed bottom-6 right-6 w-16 h-16 border-2 border-primary rounded-full bg-primary flex items-center justify-center cursor-pointer font-bold text-white hover:bg-white hover:text-primary duration-300',
          {
            'opacity-100 z-[9999]': Boolean(st >= 300),
            'opacity-0 -z-10': !Boolean(st >= 300)
          }
        )}
        onClick={handleScrollTop}
      >
        Top
      </div>
      {children}
    </div>
  )
}

export default Helmet
