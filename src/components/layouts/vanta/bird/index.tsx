import { FC } from 'react'

import { VantaBirdLayoutPresenter, VantaBirdLayoutProps } from './presenter'

export const VantaBirdLayout: FC<VantaBirdLayoutProps> = (props) => {
  return <VantaBirdLayoutPresenter {...props} />
}
