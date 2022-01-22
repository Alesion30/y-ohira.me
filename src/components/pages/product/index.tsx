import { Content, ProductPresenter } from './presenter';

export const ProductPage: React.VFC = () => {
  const contents: Content[] = [
    { title: 'ELEPOKE', description: 'ポケモン選出最適化アプリ', src: '/images/product/elepoke.png' },
    { title: 'AWECON', description: 'エアコンのリモート制御アプリ', src: '/images/product/awecon.png' },
    { title: 'Passtick', description: '複数人で共有できるメモアプリ', src: '/images/product/passtick.png' },
    { title: '授業マイスター', description: '時間割を教えてくれるLineBot', src: '/images/product/linebot.png' },
    { title: 'PenLab', description: '学習時間記録ツール', src: '/images/product/penlab.gif' },
    { title: 'はもスケ', description: '予定管理アプリ', src: '/images/product/hamosuke.gif' },
  ];
  return <ProductPresenter contents={contents} />;
};
