import { NextSeo } from 'next-seo';

import { HobbyPage } from '~/components/pages/hobby';

export default function Page() {
  return (
    <>
      <NextSeo title="HOBBY" />
      <HobbyPage />
    </>
  );
}
