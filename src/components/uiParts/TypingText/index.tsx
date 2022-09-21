import { FC } from 'react'

import {
  TypingTextPresenter,
  TypingTextProps,
} from '~/components/uiParts/TypingText/presenter'

export const TypingText: FC<TypingTextProps> = (props) => {
  return <TypingTextPresenter {...props} />
}
