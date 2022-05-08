import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import BIRD from 'vanta/dist/vanta.birds.min';

export type VantaBirdLayoutProps = {
  children: ReactNode;
};

type BIRDProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: any;
  THREE: typeof THREE;
  backgroundColor?: number;
  backgroundAlpha?: number;
  color?: number;
  color2?: number;
  colorMode?: 'lerp' | 'variance' | 'lerpGradient' | 'lerpVariance';
  quantity?: number;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
  alignment?: number;
  cohesion?: number;
};

export const VantaBirdLayoutPresenter: FC<VantaBirdLayoutProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(false);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const props: BIRDProps = {
        el: myRef.current,
        THREE: THREE,
      };
      setVantaEffect(BIRD(props));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef}>{children}</div>;
};
