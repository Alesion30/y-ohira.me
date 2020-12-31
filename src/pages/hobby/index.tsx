import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';

const Hobby: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        My Name is <span className={TopStyle.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={TopStyle.description}>Front-end Engineer & Backend Engineer</p>
    </Layout>
  );
};

export default Hobby;
