import { CaptionImage } from '~/components/uiParts/CaptionImage';
import { InViewAnimate } from '~/components/uiParts/InViewAnimate';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
import Layout from '~/layouts/index';
import style from './style.module.scss';

export type Content = {
  title: string;
  description: string;
  src: string | StaticImageData;
};

export type HobbyProps = {
  contents: Content[];
};

export const HobbyPresenter: React.VFC<HobbyProps> = ({ contents }) => {
  return (
    <Layout>
      <SectionTitle title="HOBBY" description="趣味" />
      <Spacer height={50} />
      <div className={style.images}>
        {contents.map((content, index) => {
          return (
            <div key={`hobby_content_${index}`} className={style.image}>
              <InViewAnimate delay={300} open={{ opacity: 1, y: 0 }} closed={{ opacity: 0, y: '10%' }}>
                <CaptionImage
                  title={content.title}
                  description={content.description}
                  src={content.src}
                  width={400}
                  height={400 * 0.75}
                />
              </InViewAnimate>
            </div>
          );
        })}
      </div>
      <Spacer height={80} />
    </Layout>
  );
};
