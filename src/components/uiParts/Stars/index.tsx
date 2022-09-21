import { FC } from 'react'

import { StarsPresenter, StarsProps } from './presenter'

export const Stars: FC<StarsProps> = (props) => {
  return <StarsPresenter {...props} />
}
