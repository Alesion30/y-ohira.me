import NextImage from 'next/image'
import { FC } from 'react'

import { CustomLink } from '~/components/atoms'

import style from './style.module.scss'

import alesionImg from '/public/img/alesion.jpg'

export const SelfIntroduce: FC = () => {
  return (
    <div className={style.account}>
      <div className={style.accountImage}>
        <NextImage
          alt='alesion'
          height={240}
          layout='fixed'
          priority={true}
          src={alesionImg}
          width={240}
        />
      </div>
      <div className={style.accountDesc}>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>Name:</span>
          Yuta Ohira
        </p>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>University:</span>
          Kyushu University
        </p>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>GitHub:</span>
          <CustomLink
            href='https://github.com/Alesion30'
            target={true}
            title='https://github.com/Alesion30'
          />
        </p>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>Gmail:</span>
          <CustomLink
            href='mailto:ohira.job720@gmail.com'
            title='ohira.job720@gmail.com'
          />
        </p>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>Qiita:</span>
          <CustomLink
            href='https://qiita.com/Alesion30'
            target={true}
            title='https://qiita.com/Alesion30'
          />
        </p>
        <p className={style.accountDescP}>
          <span className={style.accountDescLabel}>Zenn:</span>
          <CustomLink
            href='https://zenn.dev/alesion'
            target={true}
            title='https://zenn.dev/alesion'
          />
        </p>
      </div>
    </div>
  )
}
