import { useEffect, useState } from 'react';

import { OpeningPage } from '~/components/pages/opening';

export type OpeningLayoutProps = {
  children: React.ReactNode;
};

export const OpeningLayoutPresenter: React.FC<OpeningLayoutProps> = ({ children }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    // 5秒後にコンテンツを表示する
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (show) {
    return <OpeningPage />;
  } else {
    return <>{children}</>;
  }
};
