import { TopLinkCardPresenter, TopLinkCardProps } from './presenter';

export const TopLinkCard: React.VFC<TopLinkCardProps> = (props) => {
  return <TopLinkCardPresenter {...props} />;
};
