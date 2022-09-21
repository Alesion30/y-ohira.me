import { FC } from 'react'

import { TopLinkCardPresenter, TopLinkCardProps } from './presenter'

export const TopLinkCard: FC<TopLinkCardProps> = (props) => {
  return <TopLinkCardPresenter {...props} />
}
