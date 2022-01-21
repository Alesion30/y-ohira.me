import { CustomLink } from '~/components/uiParts/CustomLink';
import { CustomSpacer } from '~/components/uiParts/CustomSpacer';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import Layout from '~/layouts/index';
import style from './style.module.scss';
import Image from 'next/image';
import { Stars } from '~/components/uiParts/Stars';

export type Carrier = { date: string; content: string };

export type Skill = {
  name: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
};

export type AboutProps = {
  carriers: Carrier[];
  skills: Skill[];
};

export const AboutPresenter: React.VFC<AboutProps> = ({ carriers, skills }) => {
  return (
    <Layout>
      <SectionTitle title="PROFILE" description="経歴" />

      <CustomSpacer height={50} />

      <div>
        {carriers.map((item, index) => {
          return (
            <div key={`about_carrier_${index}`} className={style.carrier}>
              <p className={style.carrierTitle}>{item.date}</p>
              <p className={style.carrierDescription}>{item.content}</p>
            </div>
          );
        })}
      </div>

      <CustomSpacer height={50} />

      <div className={style.account}>
        <div className={style.accountImage}>
          <Image src="/images/alesion.png" width={334} height={237} />
        </div>
        <div className={style.accountDesc}>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Name:</span>
            Yuta Ohira
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>University:</span>
            Kyushu University
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>GitHub:</span>
            <CustomLink title="https://github.com/Alesion30" target={true} href="https://github.com/Alesion30" />
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Qiita:</span>
            <CustomLink title="https://qiita.com/Alesion30" target={true} href="https://qiita.com/Alesion30" />
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Gmail:</span>
            <CustomLink title="ohira.job720@gmail.com" href="mailto:ohira.job720@gmail.com" />
          </p>
        </div>
      </div>

      <CustomSpacer height={80} />

      <SectionTitle title="Skills & Languages" />

      <CustomSpacer height={30} />

      <div className={style.star}>
        {skills.map((skill) => (
          <div key={`about_skill_${skill.name}`} className={style.starContainer}>
            <p className={style.starName}>{skill.name}</p>
            <Stars star={skill.star} />
          </div>
        ))}
      </div>

      <CustomSpacer height={100} />
    </Layout>
  );
};
