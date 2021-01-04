import { NextPage } from 'next';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import Layout from '~/layouts/index';
import CustomImage from '~/components/CustomImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';

const techBlog: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>Technology Blog</span>
      </h1>
      <p className={TopSectionStyle.description}>技術ブログ</p>
      <CustomSpacer height={50} />
      <Grid container direction="column" justify="center" alignItems="center">
        <CustomImage src="/images/challecara.png" alt="チャレキャラ2019" />
      </Grid>
      <CustomSpacer height={50} />
    </Layout>
  );
};

export default techBlog;
