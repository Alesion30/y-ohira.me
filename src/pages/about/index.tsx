import { FC } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Layout from '~/layouts/index';
import TopSectionStyle from '~/styles/components/TopSection.module.scss';
import CustomSpacer from '~/components/CustomSpacer';
import CustomLink from '~/components/CustomLink';
import Stars from '~/components/Stars';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import breakpoint from '~/utils/breakpoint';
import { Skill } from '~/models';

interface Props {
  skills: Skill[];
}

const About: NextPage<Props> = ({ skills }) => {
  return (
    <Layout title="ABOUT">
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>PROFILE</span>
      </h1>
      <p className={TopSectionStyle.description}>経歴</p>
      <CustomSpacer height={20} />
      <Grid container justify="center" alignItems="center">
        <AboutSection />
      </Grid>
      <CustomSpacer height={50} />
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <Avatar alt="icon" variant="square" src="/images/alesion.png" style={{ width: 334, height: 237 }} />
        </Grid>
        <Grid item>
          <AccountSection />
        </Grid>
      </Grid>
      <CustomSpacer height={120} />
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>Skills & Languages</span>
      </h1>
      <CustomSpacer height={50} />
      <SkillSection skills={skills} />
      <CustomSpacer height={80} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skills: Skill[] = [
    { name: 'React', star: 5 },
    { name: 'TypeScript', star: 5 },
    { name: 'Flutter', star: 5 },
    { name: 'Docker', star: 4 },
    { name: 'Laravel', star: 4 },
    { name: 'Python', star: 3 },
    { name: 'ReactNative', star: 4 },
    { name: 'jQuery', star: 5 },
    { name: 'WordPress', star: 2 },
    { name: 'Nuxt(Vue)', star: 3 },
    { name: 'AWS', star: 3 },
    { name: 'Firebase', star: 4 },
    { name: 'MySQL', star: 4 },
    { name: 'C++(Arduino)', star: 2 },
    { name: 'Unity', star: 2 },
    { name: 'Swift', star: 1 },
    { name: 'Go', star: 1 },
    { name: '上記にない言語', star: 0 },
  ];
  return {
    props: {
      skills,
    },
  };
};

const AboutSection: FC = () => {
  const data: { date: string, content: string }[] = [
    { date: '2018年04月', content: '九州大学工学部電気情報工学科に入学。' },
    { date: '2018年12月', content: 'プログラミングの学習を始める。当時は、Unityを用いた3Dゲームの開発に熱中する。' },
    { date: '2019年05月', content: 'プログラミングサークルGLEAPに入部する。' },
    { date: '2019年06月', content: '初めてWebシステム開発の案件に参加する。' },
    { date: '2019年08月', content: 'Laravelで塾の給与管理システムの開発を行う。' },
    { date: '2019年12月', content: 'チャレキャラ2019にて、「Passtick」というアプリを開発し、Excite賞を受賞。(賞金として5万円を獲得)' },
    { date: '2020年02月', content: 'プロジェクトマネージャーとして塾の管理システム開発を取り仕切る。' },
    { date: '2020年06月', content: '株式会社DEVELで、量子機械学習プラットフォームの開発に携わる。' },
    { date: '2020年09月', content: '23株式会社にエンジニアとして入社する。' },
    { date: '2021年01月', content: 'Fukuoka Growth Next主催のスタートアップカンファレンスcallingのイベントサイト制作に携わる。' },
    { date: '2021年09月', content: 'Yahoo!主催のOpen HackU 2021にて、vscode拡張機能・GitHubと連携してエンジニアの頑張りを経験値として見える化したWEBサイト「コミットくん」を開発' },
    { date: '2021年10月', content: 'サポーターズ主催のハッカソン「技育展」で、イベント調整アプリ「Creamy」を発表' },
    { date: '2021年11月', content: 'e-ZUKA スマートフォンアプリコンテスト2021にて、オンライン会議のための感情可視化アプリ「REmotion」とイベント調整アプリ「Creamy」を発表し、グランプリを含む合計8個の賞を獲得。(賞金総額46万円)' },
  ];
  return (
    <div>
      {data.map(item => {
        return (
          <div style={{ display: 'flex' }}>
            <p style={{ whiteSpace: 'nowrap', marginTop: 5, marginBottom: 5, marginRight: 10 }}>{item.date}</p>
            <p style={{ marginTop: 5, marginBottom: 5 }}>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const AccountSection: FC = () => {
  return (
    <div>
      <p>
        <span style={{ marginRight: 10 }}>Name:</span>
        Yuta Ohira
      </p>
      <p>
        <span style={{ marginRight: 10 }}>
          <i className="fas fa-university"></i>&nbsp;University:
        </span>
        Kyushu University
      </p>
      <p>
        <span style={{ marginRight: 10 }}>
          <i className="fab fa-github"></i>&nbsp;GitHub:
        </span>
        <CustomLink title="https://github.com/Alesion30" target={true} href="https://github.com/Alesion30" />
      </p>
      <p>
        <span style={{ marginRight: 10 }}>Qiita:</span>
        <CustomLink title="https://qiita.com/Alesion30" target={true} href="https://qiita.com/Alesion30" />
      </p>
      <p>
        <span style={{ marginRight: 10 }}>
          <i className="fas fa-envelope"></i>&nbsp;Gmail:
        </span>
        <CustomLink title="ohira.job720@gmail.com" href="mailto:ohira.job720@gmail.com" />
      </p>
    </div>
  );
};

const SkillSection: FC<{ skills: Skill[] }> = ({ skills }) => {
  const bp = breakpoint('sm');
  if (bp) {
    const data: Skill[][] = [];
    data[0] = skills.filter((_, i) => i % 2 === 0);
    data[1] = skills.filter((_, i) => i % 2 === 1);
    return (
      <Grid container justify="center" alignItems="center" spacing={10}>
        <Grid item>
          {data[0].map((skill) => (
            <p style={{ marginBottom: 20 }} key={`skill_${skill.name}`}>
              <span style={{ marginRight: 20 }}>{skill.name}</span>
              <Stars star={skill.star} />
            </p>
          ))}
        </Grid>
        <Grid item>
          {data[1].map((skill) => (
            <p style={{ marginBottom: 20 }} key={`skill_${skill.name}`}>
              <span style={{ marginRight: 20 }}>{skill.name}</span>
              <Stars star={skill.star} />
            </p>
          ))}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={{ marginTop: 20 }}>
        {skills.map((skill) => (
          <p style={{ marginBottom: 10 }} key={`skill_${skill.name}`}>
            <span style={{ marginRight: 20 }}>{skill.name}</span>
            <Stars star={skill.star} />
          </p>
        ))}
      </Grid>
    );
  }
};

export default About;
