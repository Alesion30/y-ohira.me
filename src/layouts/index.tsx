import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';

interface Props {
  title?: string;
}

const DefaultLayout: NextPage<Props> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
      </Head>
      <Fragment>
        <Header />
        <div style={{ height: '150vh', marginTop: 100 }}>{children}</div>
        <ScrollTopButton />
      </Fragment>
    </ThemeProvider>
  );
};

export default DefaultLayout;
