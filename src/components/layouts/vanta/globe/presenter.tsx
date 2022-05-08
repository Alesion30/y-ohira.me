import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

export type VantaGlobeLayoutProps = {
  children: ReactNode;
};

type GLOBEProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: any;
  THREE: typeof THREE;
  backgroundColor?: number;
  color?: number;
  color2?: number;
  size?: number;
};

export const VantaGlobeLayoutPresenter: FC<VantaGlobeLayoutProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(false);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const props: GLOBEProps = {
        backgroundColor: 0xffffff,
        color2: 0x23153c,
        el: myRef.current,
        THREE: THREE,
      };
      setVantaEffect(GLOBE(props));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef}>{children}</div>;
};
