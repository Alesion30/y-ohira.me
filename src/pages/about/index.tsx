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
  const bp = breakpoint('sm');
  let SkillSection: FC;
  if (bp) {
    const data: Skill[][] = [];
    data[0] = skills.filter((_, i) => i % 2 === 0);
    data[1] = skills.filter((_, i) => i % 2 === 1);
    SkillSection = () => {
      return (
        <Grid container justify="center" alignItems="center" spacing={10}>
          <Grid item>
            {data[0].map((skill) => (
              <p key={`skill_${skill.name}`}>
                <span style={{ marginRight: 20 }}>{skill.name}</span>
                <Stars star={skill.star} />
              </p>
            ))}
          </Grid>
          <Grid item>
            {data[1].map((skill) => (
              <p key={`skill_${skill.name}`}>
                <span style={{ marginRight: 20 }}>{skill.name}</span>
                <Stars star={skill.star} />
              </p>
            ))}
          </Grid>
        </Grid>
      );
    };
  } else {
    SkillSection = () => {
      return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={{ marginTop: 20 }}>
          {skills.map((skill) => (
            <p key={`skill_${skill.name}`}>
              <span style={{ marginRight: 20 }}>{skill.name}</span>
              <Stars star={skill.star} />
            </p>
          ))}
        </Grid>
      );
    };
  }

  return (
    <Layout>
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>ABOUT</span>
      </h1>
      <p className={TopSectionStyle.description}>経歴</p>
      <CustomSpacer height={20} />
      <Grid container justify="center" alignItems="center">
        <AboutSection />
      </Grid>
      <CustomSpacer height={50} />
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <Avatar alt="icon" variant="square" src="/images/alesion.png" style={{ width: 180, height: 180 }} />
        </Grid>
        <Grid item>
          <AccountSection />
        </Grid>
      </Grid>
      <CustomSpacer height={100} />
      <h1 className={TopSectionStyle.title}>
        <span className={TopSectionStyle.highlight}>Skills & Languages</span>
      </h1>
      <CustomSpacer height={30} />
      <SkillSection />
      <CustomSpacer height={50} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skills: Skill[] = [
    { name: 'React', star: 5 },
    { name: 'TypeScript', star: 5 },
    { name: 'Laravel', star: 5 },
    { name: 'Docker', star: 4 },
    { name: 'python', star: 3 },
    { name: 'ReactNative', star: 4 },
    { name: 'jQuery', star: 4 },
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
  return (
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
        <CustomLink title="https://github.com/Alesion30" href="https://github.com/Alesion30" />
      </p>
      <p>
        <span style={{ marginRight: 10 }}>Qiita:</span>
        <CustomLink title="https://qiita.com/Alesion30" href="https://qiita.com/Alesion30" />
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

export default About;
