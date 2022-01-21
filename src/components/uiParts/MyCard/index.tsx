import { MyCardPresenter, MyCardProps } from './presenter';

export const MyCard: React.VFC<MyCardProps> = (props) => {
  return <MyCardPresenter {...props} />;
};
