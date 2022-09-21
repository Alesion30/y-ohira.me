import { FC } from 'react'

import { SectionTitlePresenter, SectionTitleProps } from './presenter'

export const SectionTitle: FC<SectionTitleProps> = (props) => {
  return <SectionTitlePresenter {...props} />
}
