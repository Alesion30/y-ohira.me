import { FC } from 'react'

import awecon from '../../../../public/img/product/awecon.png'
import commit from '../../../../public/img/product/commit.png'
import creamy from '../../../../public/img/product/creamy.png'
import diclog from '../../../../public/img/product/diclog.png'
import elepoke from '../../../../public/img/product/elepoke.png'
import hamosuke from '../../../../public/img/product/hamosuke.gif'
import linebot from '../../../../public/img/product/linebot.png'
import passtick from '../../../../public/img/product/passtick.png'
import penlab from '../../../../public/img/product/penlab.gif'
import shareCheese from '../../../../public/img/product/share-cheese.png'

import { Content, ProductPresenter } from './presenter'

export const ProductPage: FC = () => {
  const contents: Content[] = [
    {
      description: 'マップメモ共有アプリ',
      src: shareCheese,
      title: 'シェアチーズ',
    },
    {
      description: 'chrome拡張機能と連携する英単語アプリ',
      src: diclog,
      title: 'Diclog',
    },
    { description: 'イベント作成アプリ', src: creamy, title: 'creamy' },
    { description: 'ポケモン選出最適化アプリ', src: elepoke, title: 'ELEPOKE' },
    {
      description: 'エアコンのリモート制御アプリ',
      src: awecon,
      title: 'AWECON',
    },
    {
      description: '複数人で共有できるメモアプリ',
      src: passtick,
      title: 'Passtick',
    },
    {
      description: 'プログラマーの経験値を可視化するアプリ',
      src: commit,
      title: 'コミットくん',
    },
    {
      description: '時間割を教えてくれるLineBot',
      src: linebot,
      title: '授業マイスター',
    },
    { description: '学習時間記録ツール', src: penlab, title: 'PenLab' },
    { description: '予定管理アプリ', src: hamosuke, title: 'はもスケ' },
  ]
  return <ProductPresenter contents={contents} />
}
