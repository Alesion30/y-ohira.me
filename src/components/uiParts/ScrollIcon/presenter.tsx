import { FC } from 'react'

import style from './style.module.scss'

export const ScrollIconPresenter: FC = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.arrow}></span>
      <span className={style.arrow}></span>
      <span className={style.arrow}></span>
      <p>
        <span>S</span>
        <span>c</span>
        <span>r</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
      </p>
    </div>
  )
}
