import dayjs from 'dayjs'
import NextImage from 'next/image'
import { CSSProperties, FC } from 'react'

import styles from './style.module.scss'

import type { Image } from '~/types/graphcms'

import { Card } from '~/components/atoms'

type ContentCardProps = {
  title: string
  href: string
  image: Image
  date: Date
  blank?: boolean
  width?: CSSProperties['width']
  maxWidth?: CSSProperties['maxWidth']
}

export const ContentCard: FC<ContentCardProps> = ({
  title,
  href,
  image,
  date,
  blank,
  width,
  maxWidth,
}) => {
  return (
    <Card blank={blank} href={href} style={{ width, maxWidth }}>
      <NextImage
        alt=''
        height={image.height}
        src={image.url}
        width={image.width}
      />
      <div className={styles.wrapper}>
        <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Card>
  )
}
