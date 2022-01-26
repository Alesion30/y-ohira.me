import { DefaultLayout } from '~/components/layouts/default';
import { CaptionImage } from '~/components/uiParts/CaptionImage';
import { Container } from '~/components/uiParts/Container';
import { InViewAnimate } from '~/components/uiParts/InViewAnimate';
import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
import style from './style.module.scss';

export type Content = {
  title: string;
  description: string;
  src: string | StaticImageData;
};

export type ProductProps = {
  contents: Content[];
};

export const ProductPresenter: React.VFC<ProductProps> = ({ contents }) => {
  return (
    <DefaultLayout>
      <Container>
        <Spacer height={200} />
        <SectionTitle title="PRODUCT" description="今まで作ってきたアプリ" />
        <Spacer height={50} />
        <div className={style.images}>
          {contents.map((content, index) => {
            return (
              <div key={`product_content_${index}`} className={style.image}>
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
        <Spacer height={100} />
      </Container>
    </DefaultLayout>
  );
};
