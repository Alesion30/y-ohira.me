import clsx from 'clsx'
import { FC } from 'react'

import style from './style.module.scss'

import { Card } from '~/components/atoms'

export type TopLinkCardProps = {
  title: string
  description: string
  href: string
  blank?: boolean
  className?: string
}

export const TopLinkCard: FC<TopLinkCardProps> = ({
  blank,
  className,
  description,
  href,
  title,
}) => {
  return (
    <Card blank={blank} className={clsx(style.card, className)} href={href}>
      <div className={style.cardContent}>
        <h3 className={style.title}>{title} &rarr;</h3>
        <p className={style.description}>{description}</p>
      </div>
    </Card>
  )
}
