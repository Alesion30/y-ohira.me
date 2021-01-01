import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';

const Hobby: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        <span className={TopStyle.highlight}>HOBBY</span>
      </h1>
      <p className={TopStyle.description}>趣味</p>
    </Layout>
  );
};

export default Hobby;
