import { FC } from 'react'

import { HeaderPresenter } from './presenter'

export const Header: FC = () => {
  const links = [
    { href: '/about', name: 'ABOUT' },
    { href: '/product', name: 'PRODUCT' },
    { href: '/blog', name: 'BLOG' },
  ]
  return <HeaderPresenter links={links} />
}
