import { NextSeo } from 'next-seo';
import { DefaultLayoutPresenter, DefaultLayoutProps } from './presenter';

type DefaultLayoutExtendProps = {
  title?: string;
};

export const DefaultLayout: React.VFC<DefaultLayoutProps & DefaultLayoutExtendProps> = ({ title, ...props }) => {
  return (
    <div>
      <NextSeo title={title} />
      <DefaultLayoutPresenter {...props} />
    </div>
  );
};
