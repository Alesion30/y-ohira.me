import { Content, ProductPresenter } from './presenter';

export const ProductPage: React.VFC = () => {
  const contents: Content[] = [
    { description: 'ポケモン選出最適化アプリ', src: '/images/product/elepoke.png', title: 'ELEPOKE' },
    { description: 'エアコンのリモート制御アプリ', src: '/images/product/awecon.png', title: 'AWECON' },
    { description: '複数人で共有できるメモアプリ', src: '/images/product/passtick.png', title: 'Passtick' },
    { description: '時間割を教えてくれるLineBot', src: '/images/product/linebot.png', title: '授業マイスター' },
    { description: '学習時間記録ツール', src: '/images/product/penlab.gif', title: 'PenLab' },
    { description: '予定管理アプリ', src: '/images/product/hamosuke.gif', title: 'はもスケ' },
  ];
  return <ProductPresenter contents={contents} />;
};
