import { Content, HobbyPresenter } from './presenter';

export const HobbyPage: React.VFC = () => {
  const contents: Content[] = [
    { title: '漫画・アニメ', description: 'ジャンプ系の漫画をよく読みます', src: '/images/hobby/anime.png' },
    { title: 'ゲーム', description: 'ポケモンとモンハンが特に好きです', src: '/images/hobby/game.png' },
    { title: '自作PC', description: 'RyzenのCPUを用いたゲーミングPCの組み立て', src: '/images/hobby/mypc.png' },
    { title: 'ピアノ', description: 'ピアニスト（初心者）', src: '/images/hobby/piano.gif' },
  ];
  return <HobbyPresenter contents={contents} />;
};
