import { FC } from 'react'

import { MyCardPresenter, MyCardProps } from './presenter'

export const MyCard: FC<MyCardProps> = (props) => {
  return <MyCardPresenter {...props} />
}
