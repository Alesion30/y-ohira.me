import Layout from '~/layouts/index';
import style from './style.module.scss';

export const AboutPresenter: React.VFC = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h2 className={style.title}>PROFILE</h2>
        <p className={style.description}>経歴</p>
      </div>
    </Layout>
  );
};
