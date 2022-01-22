import { DefaultLayoutPresenter, DefaultLayoutProps } from './presenter';

export const DefaultLayout: React.VFC<DefaultLayoutProps> = (props) => {
  return <DefaultLayoutPresenter {...props} />;
};
