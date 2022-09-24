import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CLOUD from 'vanta/dist/vanta.clouds.min'

export type VantaCloudLayoutProps = {
  children: ReactNode
}

type CLOUDProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: any
  THREE: typeof THREE
  backgroundColor?: number
  skyColor?: number
  cloudColor?: number
  cloudShadowColor?: number
  sunColor?: number
  sunGlareColor?: number
  sunlightColor?: number
  scale?: number
  scaleMobile?: number
  speed?: number
  mouseEase?: boolean
}

export const VantaCloudLayout: FC<VantaCloudLayoutProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(false)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      const props: CLOUDProps = {
        el: myRef.current,
        skyColor: 0xffffff,
        THREE: THREE,
      }
      setVantaEffect(CLOUD(props))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={myRef}>{children}</div>
}
