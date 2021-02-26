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
    <Layout>
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
          <Avatar alt="icon" variant="square" src="/images/alesion.png" style={{ width: 180, height: 180 }} />
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
    { name: 'Flutter', star: 4 },
    { name: 'python', star: 3 },
    { name: 'ReactNative', star: 4 },
    { name: 'jQuery', star: 5 },
    { name: 'WordPress', star: 4 },
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
      <p>2018年04月 九州大学工学部電気情報工学科に入学。</p>
      <p>2018年12月 プログラミングの学習を始める。当時は、Unityを用いた3Dゲームの開発に熱中する。</p>
      <p>2019年05月 プログラミングサークル &quot;GLEAP&quot; に入部する。</p>
      <p>2019年06月 初めてWebシステム開発の案件に参加する。</p>
      <p>2019年08月 Laravelを用いた塾の給与管理システムの開発を行う。</p>
      <p>2019年12月 チャレキャラ2019にて、Excite賞を受賞。(賞金として5万円を獲得)</p>
      <p>2020年02月 プロジェクトマネージャーとして塾の管理システム開発を取り仕切る。</p>
      <p>2020年06月 株式会社DEVELの自社プラットフォームの開発に携わる。(主にインフラ周り)</p>
      <p>2020年09月 23株式会社にエンジニアとして入社する。</p>
      <p>2021年01月 Fukuoka Growth Next主催のスタートアップカンファレンス"calling"のイベントサイト制作に携わる。</p>
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
