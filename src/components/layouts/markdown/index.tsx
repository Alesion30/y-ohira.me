import dayjs from 'dayjs'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './style.module.scss'

import { DefaultLayout } from '~/components/layouts/default'
import { Image } from '~/types/graphcms'

type MarkdownLayoutProps = {
  title?: string
  thumbnail?: Image
  date?: Date
  children: string
}

export const MarkdownLayout: FC<MarkdownLayoutProps> = ({
  title,
  thumbnail,
  date,
  children,
}) => {
  const router = useRouter()
  return (
    <DefaultLayout>
      <a className={styles.back} onClick={() => router.back()}>
        ←&nbsp;戻る
      </a>
      {thumbnail && (
        <NextImage
          height={thumbnail.height}
          src={thumbnail.url}
          width={thumbnail.width}
        />
      )}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
      <hr className={styles.divider} />
      <ReactMarkdown className={styles.container}>{children}</ReactMarkdown>
    </DefaultLayout>
  )
}
