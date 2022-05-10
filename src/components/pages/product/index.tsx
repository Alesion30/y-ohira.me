import awecon from '../../../../public/img/product/awecon.png';
import elepoke from '../../../../public/img/product/elepoke.png';
import hamosuke from '../../../../public/img/product/hamosuke.gif';
import linebot from '../../../../public/img/product/linebot.png';
import passtick from '../../../../public/img/product/passtick.png';
import penlab from '../../../../public/img/product/penlab.gif';

import { Content, ProductPresenter } from './presenter';

export const ProductPage: React.FC = () => {
  const contents: Content[] = [
    { description: 'ポケモン選出最適化アプリ', src: elepoke, title: 'ELEPOKE' },
    { description: 'エアコンのリモート制御アプリ', src: awecon, title: 'AWECON' },
    { description: '複数人で共有できるメモアプリ', src: passtick, title: 'Passtick' },
    { description: '時間割を教えてくれるLineBot', src: linebot, title: '授業マイスター' },
    { description: '学習時間記録ツール', src: penlab, title: 'PenLab' },
    { description: '予定管理アプリ', src: hamosuke, title: 'はもスケ' },
  ];
  return <ProductPresenter contents={contents} />;
};
