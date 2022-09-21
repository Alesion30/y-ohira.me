import { FC } from 'react'

import { VantaCloudLayoutPresenter, VantaCloudLayoutProps } from './presenter'

export const VantaCloudLayout: FC<VantaCloudLayoutProps> = (props) => {
  return <VantaCloudLayoutPresenter {...props} />
}
