import { NextPage } from 'next';
import Layout from '~/layouts/index';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import CustomSpacer from '~/components/CustomSpacer';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const About: NextPage = () => {
  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>ABOUT</span>
      </h1>
      <p className={TopSectionStyle.description}>経歴</p>
      <CustomSpacer height={20} />
      <Grid container justify="center" alignItems="center">
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
      </Grid>
      <CustomSpacer height={50} />
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <Avatar alt="icon" variant="square" src="/images/alesion.png" style={{ width: 180, height: 180 }} />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item style={{ marginRight: 30 }}>
              <p>Name:</p>
              <p>
                <i className="fas fa-university" style={{ marginRight: 5 }}></i>University:
              </p>
              <p>
                <i className="fab fa-github" style={{ marginRight: 5 }}></i>GitHub:
              </p>
              <p>Qiita:</p>
              <p>
                <i className="fas fa-envelope" style={{ marginRight: 5 }}></i>Gmail:
              </p>
            </Grid>
            <Grid item>
              <p>Yuta Ohira</p>
              <p>Kyushu University</p>
              <p>
                <a href="https://github.com/Alesion30" target="_blank" rel="noreferrer">
                  https://github.com/Alesion30
                </a>
              </p>
              <p>
                <a href="https://qiita.com/Alesion30" target="_blank" rel="noreferrer">
                  https://qiita.com/Alesion30
                </a>
              </p>
              <p>
                <a href="mailto:ohira.job720@gmail.com">
                  ohira.job720@gmail.com
                </a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CustomSpacer height={100} />
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>Skills & Languages</span>
      </h1>
      <CustomSpacer height={50} />
    </Layout>
  );
};

export default About;
