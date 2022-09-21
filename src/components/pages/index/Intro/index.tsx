import { FC } from 'react'

import { IntroPresenter, IntroProps } from './presenter'

import { useWindow } from '~/hooks/useWindow'

export const Intro: FC<IntroProps> = (props) => {
  const { width } = useWindow()
  return <IntroPresenter {...props} windowWidth={width} />
}
