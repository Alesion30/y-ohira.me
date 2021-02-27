import { NextPage } from 'next';
import Router from 'next/router';
import Layout from '~/layouts/index';
import Head from 'next/head';
import CustomSpacer from '~/components/CustomSpacer';

interface Props {}

const ErrorPageLayout: NextPage<Props> = ({}) => {
  let title = 'エラー';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <CustomSpacer height={70} />
    </Layout>
  );
};

export default ErrorPageLayout;
