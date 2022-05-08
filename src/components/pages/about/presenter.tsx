import Image from 'next/image';

import style from './style.module.scss';

import { DefaultLayout } from '~/components/layouts/default';
import { CustomLink } from '~/components/uiParts/CustomLink';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
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

export const AboutPresenter: React.FC<AboutProps> = ({ carriers, skills }) => {
  return (
    <DefaultLayout>
      <SectionTitle description="経歴" title="PROFILE" />
      <Spacer height={50} />
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
      <Spacer height={50} />
      <div className={style.account}>
        <div className={style.accountImage}>
          <Image alt="alesion" height={237} layout="fixed" src="/images/alesion.png" width={334} />
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
            <CustomLink href="https://github.com/Alesion30" target={true} title="https://github.com/Alesion30" />
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Gmail:</span>
            <CustomLink href="mailto:ohira.job720@gmail.com" title="ohira.job720@gmail.com" />
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Qiita:</span>
            <CustomLink href="https://qiita.com/Alesion30" target={true} title="https://qiita.com/Alesion30" />
          </p>
          <p className={style.accountDescP}>
            <span className={style.accountDescLabel}>Zenn:</span>
            <CustomLink href="https://zenn.dev/alesion" target={true} title="https://zenn.dev/alesion" />
          </p>
        </div>
      </div>
      <Spacer height={80} />
      <SectionTitle title="Skills & Languages" />
      <Spacer height={30} />
      <div className={style.star}>
        {skills.map((skill) => (
          <div key={`about_skill_${skill.name}`} className={style.starContainer}>
            <p className={style.starName}>{skill.name}</p>
            <Stars star={skill.star} />
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};
