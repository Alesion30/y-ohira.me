import { FC, useState } from 'react'

import { OpeningPage } from '~/components/pages/opening'
import { getDoneOpening, setDoneOpening } from '~/utils'

export type OpeningLayoutProps = {
  children: React.ReactNode
  disabled?: boolean
}

export const OpeningLayoutPresenter: FC<OpeningLayoutProps> = ({
  children,
  disabled = false,
}) => {
  const [show, setShow] = useState(!disabled)

  if (show && !getDoneOpening()) {
    return (
      <OpeningPage
        onFinish={() => {
          setShow(false)
          setDoneOpening(true)
        }}
      />
    )
  } else {
    return <>{children}</>
  }
}
