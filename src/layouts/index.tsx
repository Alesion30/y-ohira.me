import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { motion } from 'framer-motion';
import theme from '~/layouts/theme';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import ScrollTopButton from '~/layouts/components/ScrollTopButton';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import MenuStyle from '~/styles/components/Menu.module.scss';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import LinkCard from '~/components/LinkCard';
import CustomLinkCard from '~/layouts/components/CustomLinkCard';

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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
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
              <Grid container direction="row" justify="center" alignItems="center">
                <CustomLinkCard href="/" title="Home" description="トップページ" />
                <CustomLinkCard href="/about" title="About" description="経歴・スキルなど" />
                <CustomLinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
                <CustomLinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
                <CustomLinkCard href="/blog" title="Tech Blog" description="技術ブログ" />
                <LinkCard
                  href="https://github.com/Alesion30"
                  target={true}
                  title="GitHub Account"
                  description="Githubのアカウントはこちら"
                />
              </Grid>
            </Container>
            <CustomSpacer height={120} />
          </div>
        </Drawer>
      </motion.div>
    </ThemeProvider>
  );
};

export default DefaultLayout;
