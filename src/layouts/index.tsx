import { useState } from 'react';
import { NextPage } from 'next';
import appConfig from '~/config/app';
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
import CustomLinkCard from '~/layouts/components/CustomLinkCard';

interface Props {
  title?: string;
  marginTop?: number;
  og?: OG;
}

interface OG {
  title?: string;
  description?: string;
  image?: string;
}

const DefaultLayout: NextPage<Props> = ({ children, title, marginTop, og }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const siteTitle = title ? `${title} | ${appConfig.title}` : `${appConfig.title}`;

  // OGP情報
  const ogtitle = og?.title ?? siteTitle;
  const ogdescription = og?.description ?? appConfig.description;
  const ogimage = og?.image ?? appConfig.image;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{ogtitle}</title>
        <meta property="og:title" content={ogtitle} />
        <meta property="og:description" content={ogdescription} />
        <meta property="og:image" content={ogimage} />
      </Head>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container maxWidth="md">
          <Header active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} close={menuOpen} />
          <div style={{ minHeight: '85vh', paddingTop: marginTop ?? 150 }}>{children}</div>
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
                <CustomLinkCard href="/hobby" title="Hobby" description="趣味" />
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
