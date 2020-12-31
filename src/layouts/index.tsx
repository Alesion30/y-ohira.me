import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';
import LayoutStyle from '~/styles/Layout.module.scss';

interface Props {
  title?: string;
  marginTop?: number;
}

const DefaultLayout: NextPage<Props> = ({ children, title, marginTop }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
      </Head>
      <div className={LayoutStyle.container}>
        <Header />
        <div style={{ minHeight: '100vh', paddingTop: marginTop ?? 100 }}>{children}</div>
        <ScrollTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default DefaultLayout;
