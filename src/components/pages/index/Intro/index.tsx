import { IntroPresenter, IntroProps } from './presenter';
import { useWindow } from '../../../../hooks/useWindow';

export const Intro: React.VFC<IntroProps> = (props) => {
  const { width } = useWindow();
  return <IntroPresenter {...props} windowWidth={width} />;
};
