import { FC, useEffect, useState } from 'react'

import { sleep } from '~/utils/sleepUtil'

export type TypingTextProps = {
  text: string
  className?: string
  speed?: number
  onFinishRender?: () => void
  delay?: number
}

export const TypingTextPresenter: FC<TypingTextProps> = ({
  className,
  delay = 0,
  onFinishRender,
  speed = 100,
  text,
}) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    let timerId: NodeJS.Timeout
    ;(async () => {
      await sleep(delay)
      const charItr = text[Symbol.iterator]()

      ;(function showChar() {
        const nextChar = charItr.next()
        if (nextChar.done) {
          if (onFinishRender) {
            onFinishRender()
          }
          return
        }
        setValue((current) => current + nextChar.value)
        timerId = setTimeout(showChar, speed)
      })()
    })()

    return () => clearTimeout(timerId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <p className={className}>{value}</p>
}
