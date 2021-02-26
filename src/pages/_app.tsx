import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default MyApp;
