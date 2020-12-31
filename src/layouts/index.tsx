import React, { FC, Fragment, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
  const router = useRouter();
  console.log(router.route);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
      </Head>
      <Fragment>
        <Header />
        <div style={{ height: '200vh', marginTop: 100 }}>{children}</div>
        <ScrollTopButton />
      </Fragment>
    </ThemeProvider>
  );
};

export default DefaultLayout;
