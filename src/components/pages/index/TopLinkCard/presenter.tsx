import clsx from 'clsx'
import { FC } from 'react'

import style from './style.module.scss'

import { MyCard } from '~/components/uiParts/MyCard'

export type TopLinkCardProps = {
  title: string
  description: string
  href: string
  blank?: boolean
  className?: string
}

export const TopLinkCardPresenter: FC<TopLinkCardProps> = ({
  blank,
  className,
  description,
  href,
  title,
}) => {
  return (
    <MyCard blank={blank} className={clsx(style.card, className)} href={href}>
      <div className={style.cardContent}>
        <h3 className={style.title}>{title} &rarr;</h3>
        <p className={style.description}>{description}</p>
      </div>
    </MyCard>
  )
}
