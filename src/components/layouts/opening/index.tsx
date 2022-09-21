import dynamic from 'next/dynamic'
import { FC } from 'react'

import { OpeningLayoutProps } from './presenter'
const OpeningLayoutPresenter = dynamic(
  async () => (await import('./presenter')).OpeningLayoutPresenter,
  {
    ssr: false,
  }
)

export const OpeningLayout: FC<OpeningLayoutProps> = (props) => {
  return <OpeningLayoutPresenter {...props} />
}
