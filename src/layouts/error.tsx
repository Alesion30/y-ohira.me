import { NextPage } from 'next';
import Head from 'next/head';
import CustomSpacer from '~/components/CustomSpacer';
import LinkCard from '~/components/LinkCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
      <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 100 }}>
        <h1>{status}</h1>
        <p>{error}</p>
        <CustomSpacer height={20} />
        <Grid container direction="row" justify="center" alignItems="center">
          <LinkCard href="/" title="Home" description="トップページ" />
          <LinkCard href="/about" title="About" description="経歴・スキルなど" />
          <LinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
          <LinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
        </Grid>
      </div>
    </Container>
  );
};

export default ErrorPageLayout;
