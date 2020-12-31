import React, { FC, Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';

interface Props {
  title?: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
      </Head>
      <Fragment>
        <Header />
        <div style={{ height: '200vh' }}>{children}</div>
        <ScrollTopButton />
      </Fragment>
    </ThemeProvider>
  );
};

export default DefaultLayout;
