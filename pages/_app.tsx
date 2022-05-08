import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import '~/styles/globals.scss';
import 'modern-css-reset/dist/reset.min.css';

import SEO from '../next-seo.config';

import { apolloClient } from '~/plugins/apollo';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <ApolloProvider client={apolloClient}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ApolloProvider>
    </AnimatePresence>
  );
};

export default MyApp;
