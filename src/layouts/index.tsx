import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';
import Container from '@material-ui/core/Container';

interface Props {
  title?: string;
  marginTop?: number;
}

const DefaultLayout: NextPage<Props> = ({ children, title, marginTop }) => {
  // メニューの開閉
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
        <meta name="description" content="ohira yutaのポートフォリオ" />
      </Head>
      <Container maxWidth="md">
        <Header active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <div style={{ minHeight: '100vh', paddingTop: marginTop ?? 150 }}>{children}</div>
        <ScrollTopButton />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default DefaultLayout;
