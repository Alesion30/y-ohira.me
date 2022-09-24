import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './style.module.scss'

import { DefaultLayout } from '~/components/layouts/default'

type MarkdownLayoutProps = {
  children: string
}

export const MarkdownLayout: FC<MarkdownLayoutProps> = ({ children }) => {
  return (
    <DefaultLayout>
      <ReactMarkdown className={styles.container}>{children}</ReactMarkdown>
    </DefaultLayout>
  )
}
