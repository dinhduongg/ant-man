import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import 'tippy.js/themes/translucent.css'
import 'tippy.js/animations/perspective.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'tippy.js/themes/material.css'
import { FC } from 'react'

interface Props {
  link?: string
  content?: string
  icon?: any
  style?: string | any
  placement?: string | any
}

const Contact: FC<Props> = ({ link, content, icon, style, placement }) => {
  return (
    <Tippy content={content} theme='material' animation='perspective' duration={300} placement={placement ?? 'bottom'}>
      <a href={link} target='_blank' className={`inline-block hover:text-primary duration-200 ${style}`}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </Tippy>
  )
}

export default Contact
