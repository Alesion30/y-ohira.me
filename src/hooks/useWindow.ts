import { useEffect, useState } from 'react';

export const useWindow = (): {
  width: number;
  height: number;
} => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      // eslint-disable-next-line consistent-return
      return;
    }
  }, []);
  return windowSize;
};
