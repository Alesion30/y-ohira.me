import { Content, HobbyPresenter } from './presenter';

export const HobbyPage: React.VFC = () => {
  const contents: Content[] = [
    { description: 'ジャンプ系の漫画をよく読みます', src: '/images/hobby/anime.png', title: '漫画・アニメ' },
    { description: 'ポケモンとモンハンが特に好きです', src: '/images/hobby/game.png', title: 'ゲーム' },
    { description: 'RyzenのCPUを用いたゲーミングPCの組み立て', src: '/images/hobby/mypc.png', title: '自作PC' },
    { description: 'ピアニスト（初心者）', src: '/images/hobby/piano.gif', title: 'ピアノ' },
  ];
  return <HobbyPresenter contents={contents} />;
};
