import { useState } from 'react';

import { OpeningPage } from '~/components/pages/opening';

export type OpeningLayoutProps = {
  children: React.ReactNode;
};

export const OpeningLayoutPresenter: React.FC<OpeningLayoutProps> = ({ children }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return <OpeningPage onFinish={() => setShow(false)} />;
  } else {
    return <>{children}</>;
  }
};
