import Link from 'next/link'
import { CSSProperties, FC } from 'react'

import LinkStyle from './style.module.scss'

interface Props {
  title: string
  href: string
  target?: boolean
  style?: CSSProperties
}

export const CustomLink: FC<Props> = ({ href, style, target, title }) => {
  if (target) {
    return (
      <Link href={href}>
        <a
          className={LinkStyle.link}
          rel='noopener noreferrer'
          style={style}
          target='_blank'
        >
          {title}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={href}>
        <a className={LinkStyle.link} style={style}>
          {title}
        </a>
      </Link>
    )
  }
}
