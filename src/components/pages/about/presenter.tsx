import { CustomSpacer } from '~/components/uiParts/CustomSpacer';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import Layout from '~/layouts/index';
import style from './style.module.scss';

export type Carrier = { date: string; content: string };

export type AboutProps = {
  carriers: Carrier[];
};

export const AboutPresenter: React.VFC<AboutProps> = ({ carriers }) => {
  return (
    <Layout>
      <div className={style.sectionTitleContainer}>
        <SectionTitle title="PROFILE" description="経歴" />
      </div>
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
    </Layout>
  );
};
