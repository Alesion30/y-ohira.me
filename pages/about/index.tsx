import { NextSeo } from 'next-seo';
import { AboutPage } from '~/components/pages/about';

export default () => {
  return (
    <>
      <NextSeo title="ABOUT" />
      <AboutPage />
    </>
  );
};
