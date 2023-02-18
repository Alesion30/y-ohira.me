import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import style from './style.module.scss'

const links = [
  { href: '/about', title: 'ABOUT' },
  { href: '/product', title: 'PRODUCT' },
  { href: '/blog', title: 'BLOG' },
]

export const Header: FC = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const onToggle = () => setOpen(!open)
  const onClose = () => setOpen(false)

  // 背景スクロール禁止制御
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : ''
  }, [open])

  return (
    <div>
      <div className={style.topLinkWrapper}>
        <Link href='/'>
          <a className={style.topLink}>y-ohira.me</a>
        </Link>
      </div>

      {/* ハンバーガーメニューボタン */}
      <div className={style.menuBtnWrapper} onClick={onToggle}>
        <div className={clsx(style.menuBtn, open && style.menuBtnActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      <div className={clsx(style.menuOverlay, open && style.menuOverlayActive)}>
        <div className={style.menuLinks}>
          {links.map((link) => {
            const isActive = router.route === link.href
            return (
              <Link key={link.title} href={link.href}>
                <a
                  className={clsx(
                    style.menuLink,
                    isActive && style.menuLinkActive
                  )}
                  onClick={isActive ? onClose : undefined}
                >
                  {link.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
