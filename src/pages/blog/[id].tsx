import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Router from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import { getAllBlogIds, getBlogData } from '~/libs/blogs';
import Layout from '~/layouts/index';
import { Blog } from '~/models';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import LinkButton from '~/components/LinkButton';

interface Props {
  postData: Blog | null;
}

const BlogPage: NextPage<Props> = ({ postData }) => {
  const _date = moment(postData?.date ?? '');
  if (postData) {
    return (
      <Layout>
        <Head>
          <title>{postData.title ?? 'タイトル未設定'}</title>
        </Head>
        <article>
          <LinkButton onClick={() => Router.back()} style={{ width: 110 }}>
            &larr; 戻る
          </LinkButton>
          <CustomSpacer height={30} />
          <p>{_date.format('YYYY-MM-DD')}</p>
          <h1>{postData.title ?? ''}</h1>
          <Grid container direction="row" justify="flex-start">
            {(postData?.tags ?? []).map((tag, i) => (
              <Chip key={`tag_${i}`} label={tag} color="primary" style={{ margin: 5 }} />
            ))}
          </Grid>
          <CustomSpacer height={30} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <CustomSpacer height={70} />
      </Layout>
    );
  } else {
    return <Fragment />;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData = params && typeof params.id == 'string' ? await getBlogData(params.id) : null;
  return {
    props: {
      postData,
    },
  };
};

export default BlogPage;
