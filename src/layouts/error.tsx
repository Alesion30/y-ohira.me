import { NextPage } from 'next';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { motion } from 'framer-motion';
import { CustomSpacer } from '~/components/uiParts/CustomSpacer';
import { LinkCard } from '~/components/uiParts/LinkCard';

interface Props {
  statusCode: number;
  errorMessage?: string;
}

const ErrorPageLayout: NextPage<Props> = ({ statusCode, errorMessage }) => {
  let status = `${statusCode}エラー`;
  let error = errorMessage ?? 'ページが表示できませんでした';
  let title = `${status} | ${error}`;
  return (
    <Container maxWidth="md">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 100 }}>
          <h1>{status}</h1>
          <p>{error}</p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar alt="una" variant="square" src="/images/una.png" style={{ width: 200, height: 300 }} />
          </Grid>
          <CustomSpacer height={40} />
          <Grid container direction="row" justify="space-around" alignItems="center">
            <LinkCard href="/" title="Home" description="トップページ" />
            <LinkCard href="/about" title="About" description="経歴・スキルなど" />
            <LinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
            <LinkCard href="/hobby" title="Hobby" description="趣味" />
          </Grid>
          <CustomSpacer height={20} />
        </div>
      </motion.div>
    </Container>
  );
};

export default ErrorPageLayout;
