import { useState, useRef, useEffect, ReactNode, VFC } from 'react';
import * as THREE from 'three';
import CLOUD from 'vanta/dist/vanta.clouds.min';

export type VantaCloudLayoutProps = {
  children: ReactNode;
};

type CLOUDProps = {
  el: any;
  THREE: typeof THREE;
  backgroundColor?: number;
  skyColor?: number;
  cloudColor?: number;
  cloudShadowColor?: number;
  sunColor?: number;
  sunGlareColor?: number;
  sunlightColor?: number;
  scale?: number;
  scaleMobile?: number;
  speed?: number;
  mouseEase?: boolean;
};

export const VantaCloudLayoutPresenter: VFC<VantaCloudLayoutProps> = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState<any>();
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const props: CLOUDProps = {
        el: myRef.current,
        THREE: THREE,
        skyColor: 0xffffff,
      };
      setVantaEffect(CLOUD(props));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef}>{children}</div>;
};
