import { NextPage } from 'next';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import Layout from '~/layouts/index';
import LinkCard from '~/components/LinkCard';
import CustomImage from '~/components/CustomImage';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        My Name is <span className={TopSectionStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={TopSectionStyle.description}>Frontend Engineer & Backend Engineer</p>
      <Grid container direction="row" justify="center" alignItems="center">
        <LinkCard href="/about" title="Profile" description="経歴・スキルなど" />
        <LinkCard href="/product" title="Product" description="今まで作ってきたアプリ" />
        <LinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
        <LinkCard href="https://github.com/Alesion30" title="GitHub Account" description="Githubのアカウントはこちら" />
      </Grid>
      <CustomSpacer height={50} />
      <Grid container direction="column" justify="center" alignItems="center">
        <CustomImage src="/images/challecara.png" alt="チャレキャラ2019" />
      </Grid>
      <CustomSpacer height={50} />
    </Layout>
  );
};

export default Home;
