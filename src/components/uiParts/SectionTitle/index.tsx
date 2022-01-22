import { SectionTitlePresenter, SectionTitleProps } from './presenter';

export const SectionTitle: React.VFC<SectionTitleProps> = (props) => {
  return <SectionTitlePresenter {...props} />;
};
