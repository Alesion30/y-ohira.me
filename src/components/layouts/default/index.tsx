import { FC } from 'react'

import { DefaultLayoutPresenter, DefaultLayoutProps } from './presenter'

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  return <DefaultLayoutPresenter {...props} />
}
