import { FC } from 'react'

import { CaptionImagePresenter, CaptionImageProps } from './presenter'

export const CaptionImage: FC<CaptionImageProps> = (props) => {
  return <CaptionImagePresenter {...props} />
}
