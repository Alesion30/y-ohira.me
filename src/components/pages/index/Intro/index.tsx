import { IntroPresenter, IntroProps } from './presenter';

export const Intro: React.VFC<IntroProps> = (props) => {
  return <IntroPresenter {...props} />;
};
