import { NextSeo } from 'next-seo';
import { HobbyPage } from '~/components/pages/hobby';

export default () => {
  return (
    <>
      <NextSeo title="HOBBY" />
      <HobbyPage />
    </>
  );
};
