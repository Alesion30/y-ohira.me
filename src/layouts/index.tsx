import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import MenuStyle from '~/styles/components/Menu.module.scss';
import CustomSpacer from '~/components/CustomSpacer';

interface Props {
  title?: string;
  marginTop?: number;
}

const DefaultLayout: NextPage<Props> = ({ children, title, marginTop }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ?? 'ポートフォリオ'}</title>
      </Head>
      <Container maxWidth="md">
        <Header active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} close={menuOpen} />
        <div style={{ minHeight: '100vh', paddingTop: marginTop ?? 150 }}>{children}</div>
        <ScrollTopButton />
        <Footer />
      </Container>
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        transitionDuration={{ enter: 800, exit: 200 }}
      >
        <div className={MenuStyle.menu}>
          <CustomSpacer height={150} />
          <Container maxWidth="md">
            <h1>menu</h1>
          </Container>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default DefaultLayout;
