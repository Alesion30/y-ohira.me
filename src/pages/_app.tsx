import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
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
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#008CD6" />
          <link rel="manifest" href="/manifest.json" />

          {/* apple-touch-icon */}
          <link rel="apple-touch-icon" href="/images/icons/icon-72x72.png" sizes="72x72" />
          <link rel="apple-touch-icon" href="/images/icons/icon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" href="/images/icons/icon-128x128.png" sizes="128x128" />
          <link rel="apple-touch-icon" href="/images/icons/icon-144x144.png" sizes="144x144" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Noto+Sans+JP:wght@100&display=swap"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI="
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </AnimatePresence>
  );
};

export default MyApp;
