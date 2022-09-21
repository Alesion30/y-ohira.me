import { FC } from 'react'

import { VantaGlobeLayoutPresenter, VantaGlobeLayoutProps } from './presenter'

export const VantaGlobeLayout: FC<VantaGlobeLayoutProps> = (props) => {
  return <VantaGlobeLayoutPresenter {...props} />
}
