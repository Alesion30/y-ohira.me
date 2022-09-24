import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

export type VantaGlobeLayoutProps = {
  children: ReactNode
}

type GLOBEProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: any
  THREE: typeof THREE
  backgroundColor?: number
  color?: number
  color2?: number
  size?: number
  points?: number
  maxDistance?: number
  spacing?: number
  showDots?: boolean
}

export const VantaGlobeLayout: FC<VantaGlobeLayoutProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(false)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      const props: GLOBEProps = {
        backgroundColor: 0x222222,
        color: 0x38b6ff,
        color2: 0x85150d,
        el: myRef.current,
        THREE: THREE,
      }
      setVantaEffect(GLOBE(props))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={myRef}>{children}</div>
}
