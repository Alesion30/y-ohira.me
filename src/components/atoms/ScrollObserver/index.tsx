import { ReactNode, FC, useState, useRef, useEffect } from 'react'

type ScrollObserverState = {
  x?: number
  y?: number
}

type ScrollObserverProps = {
  children: (state: ScrollObserverState) => ReactNode
}

export const ScrollObserver: FC<ScrollObserverProps> = ({ children }) => {
  const [state, setState] = useState<ScrollObserverState>({})

  const ref = useRef<HTMLDivElement>(null)
  const getScrollPosition = () => {
    const rect = ref.current?.getBoundingClientRect()
    setState({ x: rect?.x, y: rect?.y })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getScrollPosition()
      window.addEventListener('scroll', getScrollPosition)
      return () => window.removeEventListener('scroll', getScrollPosition)
    }
  }, [])
  return <div ref={ref}>{children(state)}</div>
}
