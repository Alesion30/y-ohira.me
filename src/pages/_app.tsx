import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '~/styles/globals.scss';
import 'modern-css-reset/dist/reset.min.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { ApolloProvider } from '@apollo/client';
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
