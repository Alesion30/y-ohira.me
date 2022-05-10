import { useState } from 'react';

import { OpeningPage } from '~/components/pages/opening';

export type OpeningLayoutProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const OpeningLayoutPresenter: React.FC<OpeningLayoutProps> = ({ children, disabled = false }) => {
  const [show, setShow] = useState(!disabled);

  if (show) {
    return <OpeningPage onFinish={() => setShow(false)} />;
  } else {
    return <>{children}</>;
  }
};
