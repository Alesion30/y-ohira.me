import { NextPage } from 'next';
import HomeStyle from '~/styles/Home.module.scss';
import Layout from '~/layouts/index';
import LinkCard from '~/components/LinkCard';

const Home: NextPage = () => {
  return (
    <Layout marginTop={150}>
      <h1 className={HomeStyle.title}>
        My Name is <span className={HomeStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={HomeStyle.description}>Front-end Engineer & Backend Engineer</p>
      <div className={HomeStyle.grid}>
        <LinkCard href="/about" title="Profile" description="経歴・スキルなど" />
        <LinkCard href="/product" title="Product" description="私が今までに作ってきたアプリ" />
        <LinkCard href="/hobby" title="Hobby" description="個人的な趣味" />
        <LinkCard href="/" title="GitHub Account" description="Githubのアカウントはこちら" />
      </div>
    </Layout>
  );
};

export default Home;
