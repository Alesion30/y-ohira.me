import { useEffect, useState } from 'react'

export const useWindow = (): {
  width: number
  height: number
} => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      // eslint-disable-next-line consistent-return
      return
    }
  }, [])
  return windowSize
}
