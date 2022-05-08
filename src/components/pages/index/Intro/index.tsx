import { useWindow } from '../../../../hooks/useWindow';

import { IntroPresenter, IntroProps } from './presenter';

export const Intro: React.VFC<IntroProps> = (props) => {
  const { width } = useWindow();
  return <IntroPresenter {...props} windowWidth={width} />;
};
