import { StarsPresenter, StarsProps } from './presenter';

export const Stars: React.VFC<StarsProps> = (props) => {
  return <StarsPresenter {...props} />;
};
