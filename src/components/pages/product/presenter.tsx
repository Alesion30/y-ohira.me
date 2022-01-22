import { SectionTitle } from '~/components/uiParts/SectionTitle';
import { Spacer } from '~/components/uiParts/Spacer';
import Layout from '~/layouts/index';
import style from './style.module.scss';

export const ProductPresenter: React.VFC = () => {
  return (
    <Layout>
      <SectionTitle title="PRODUCT" description="今まで作ってきたアプリ" />
      <Spacer height={50} />
    </Layout>
  );
};
