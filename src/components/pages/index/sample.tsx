// https://codesandbox.io/s/xbuh5?file=/src/App.js
import { DefaultLayout } from '~/components/layouts/default';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import DefaultGlobe from 'react-globe.gl';

const N = 1000;
const arcsData = [...Array(N)].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ['#B43632', '#EEB649', '#CCD556'][Math.round(Math.random() * 3)],
    ['#B43632', '#EEB649', '#CCD556'][Math.round(Math.random() * 3)],
  ],
}));

export const SamplePresenter: React.VFC = () => {
  let Globe: typeof DefaultGlobe = () => null;
  if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

  const globeElement = useRef();
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    // Auto-rotate
    // @ts-ignore
    globeElement.current.controls().autoRotate = true;
    // @ts-ignore
    globeElement.current.controls().autoRotateSpeed = 0.5;
    // @ts-ignore
    globeElement.current.controls().enableZoom = false;
  }, []);

  useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight * 1.5]);
  }, []);

  return (
    <DefaultLayout full>
      <div
        style={{
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          className="App"
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              transform: 'translate(-30%, -15%)',
              pointerEvents: 'none',
            }}
          >
            <Globe
              width={size[0]}
              height={size[1]}
              waitForGlobeReady={false}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              arcsData={arcsData}
              arcColor={'color'}
              arcDashLength={() => Math.random()}
              arcDashGap={() => Math.random()}
              arcStroke={0.05}
              animateIn={false}
              arcDashAnimateTime={10000}
              ref={globeElement}
              enablePointerInteraction={false}
              backgroundColor="#FFFFFF"
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100vh',
              padding: '80px',
              fontSize: '70px',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Hello world (get it?)
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
