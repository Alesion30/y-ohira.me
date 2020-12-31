import React, { FC, Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';

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
        <div>{children}</div>
      </Fragment>
    </ThemeProvider>
  );
};

export default DefaultLayout;
