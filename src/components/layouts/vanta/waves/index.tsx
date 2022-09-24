import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export type VantaWaveLayoutProps = {
  children: ReactNode
}

type WAVESProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: any
  THREE: typeof THREE
  color?: number
  shininess?: number
  waveHeight?: number
  waveSpeed?: number
  zoom?: number
}

export const VantaWaveLayout: FC<VantaWaveLayoutProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(false)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      const props: WAVESProps = {
        color: 0x737387,
        el: myRef.current,
        THREE: THREE,
      }
      setVantaEffect(WAVES(props))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={myRef}>{children}</div>
}
