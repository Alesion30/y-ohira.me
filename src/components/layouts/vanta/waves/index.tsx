import { FC } from 'react'

import { VantaWaveLayoutPresenter, VantaWaveLayoutProps } from './presenter'

export const VantaWaveLayout: FC<VantaWaveLayoutProps> = (props) => {
  return <VantaWaveLayoutPresenter {...props} />
}
