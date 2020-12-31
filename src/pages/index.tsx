import { NextPage } from 'next';
import TopStyle from '~/styles/Top.module.scss';
import Layout from '~/layouts/index';
import LinkCard from '~/components/LinkCard';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        My Name is <span className={TopStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={TopStyle.description}>Front-end Engineer & Backend Engineer</p>
      <Grid container direction="row" justify="center" alignItems="center">
        <LinkCard href="/about" title="Profile" description="経歴・スキルなど" />
        <LinkCard href="/product" title="Product" description="今までに作ってきたアプリ" />
        <LinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
        <LinkCard href="https://github.com/Alesion30" title="GitHub Account" description="Githubのアカウントはこちら" />
      </Grid>
      <div style={{ marginTop: 50, marginBottom: 100 }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Image src="/images/challecara.png" title="Contemplative Reptile" width={700} height={400} />
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
