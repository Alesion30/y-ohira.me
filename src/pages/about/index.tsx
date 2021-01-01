import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopStyle from '~/styles/Top.module.scss';
import CustomSpacer from '~/components/CustomSpacer';

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopStyle.title}>
        <span className={TopStyle.highlight}>ABOUT</span>
      </h1>
      <p className={TopStyle.description}>経歴</p>
      <CustomSpacer height={20} />
      <div>
        <p>2018年4月 九州大学工学部電気情報工学科に入学。</p>
        <p>2018年12月 プログラミングの学習を始める。当時は、Unityを用いた3Dゲームの開発に熱中する。</p>
        <p>2019年5月 プログラミングサークル &quot;GLEAP&quot; に入部する。</p>
        <p>2019年6月 初めてWebシステム開発の案件に参加する。</p>
        <p>2019年8月 Laravelを用いた塾の給与管理システムの開発を行う。</p>
        <p>2019年12月 チャレキャラ2019にて、Excite賞を受賞。(賞金として5万円を獲得)</p>
        <p>2020年2月 プロジェクトマネージャーとして塾の管理システム開発を取り仕切る。</p>
        <p>2020年6月 株式会社DEVELの自社プラットフォームの開発に携わる。(主にインフラ周り)</p>
        <p>2020年9月 23株式会社のエンジニアとして、スマホアプリの改修などの受託案件を行う。</p>
      </div>
    </Layout>
  );
};

export default About;
