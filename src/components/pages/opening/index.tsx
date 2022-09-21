import { FC } from 'react'

import {
  OpeningPresenter,
  OpeningProps,
} from '~/components/pages/opening/presenter'

export const OpeningPage: FC<OpeningProps> = (props) => {
  return <OpeningPresenter {...props} />
}
