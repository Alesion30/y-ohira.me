import { FC } from 'react'

import { AboutPresenter, Carrier, Skill } from './presenter'

export const AboutPage: FC = () => {
  const carriers: Carrier[] = [
    { content: '九州大学工学部電気情報工学科に入学。', date: '2018年04月' },
    {
      content:
        'プログラミングの学習を始める。当時は、Unityを用いた3Dゲームの開発に熱中する。',
      date: '2018年12月',
    },
    { content: 'プログラミングサークルGLEAPに入部する。', date: '2019年05月' },
    { content: '初めてWebシステム開発の案件に参加する。', date: '2019年06月' },
    {
      content: 'Laravelで塾の給与管理システムの開発を行う。',
      date: '2019年08月',
    },
    {
      content:
        'チャレキャラ2019にて、「Passtick」というアプリを開発し、Excite賞を受賞。(賞金として5万円を獲得)',
      date: '2019年12月',
    },
    {
      content:
        'プロジェクトマネージャーとして塾の管理システム開発を取り仕切る。',
      date: '2020年02月',
    },
    {
      content: '株式会社DEVELで、量子機械学習プラットフォームの開発に携わる。',
      date: '2020年06月',
    },
    { content: '23株式会社にエンジニアとして入社する。', date: '2020年09月' },
    {
      content:
        'Fukuoka Growth Next主催のスタートアップカンファレンスcallingのイベントサイト制作に携わる。',
      date: '2021年01月',
    },
    {
      content:
        'Yahoo!主催のOpen HackU 2021にて、vscode拡張機能・GitHubと連携してエンジニアの頑張りを経験値として見える化したWEBサイト「コミットくん」を開発',
      date: '2021年09月',
    },
    {
      content:
        'サポーターズ主催のハッカソン「技育展」で、イベント調整アプリ「Creamy」を発表',
      date: '2021年10月',
    },
    {
      content:
        'e-ZUKA スマートフォンアプリコンテスト2021にて、オンライン会議のための感情可視化アプリ「REmotion」とイベント調整アプリ「Creamy」を発表し、グランプリを含む合計8個の賞を獲得。(賞金総額46万円)',
      date: '2021年11月',
    },
    { content: '九州大学工学部電気情報工学科を卒業。', date: '2022年03月' },
    { content: '九州大学大学院システム情報科学府に入学。', date: '2022年04月' },
    {
      content:
        'ABEMAで1ヶ月間就業型インターンシップ（CA Tech JOB）に参加する。',
      date: '2022年05月',
    },
    {
      content:
        'CookpadのKomerco事業部で2ヶ月間就業型インターンシップに参加する。',
      date: '2022年06月',
    },
    {
      content: 'Yahoo! Newsのサマーインターンシップに参加する。',
      date: '2022年08月',
    },
    {
      content: 'DeNAの短期インターンシップに参加する。',
      date: '2022年09月',
    },
    {
      content:
        'Yahoo!主催のDigital Hackdayで「マイルド翻訳」を開発し、Fun賞を受賞する。',
      date: '2022年09月',
    },
  ]

  const skills: Skill[] = [
    { name: 'React', star: 5 },
    { name: 'NextJS', star: 5 },
    { name: 'TypeScript', star: 5 },
    { name: 'Flutter', star: 5 },
    { name: 'Docker', star: 4 },
    { name: 'Express', star: 4 },
    { name: 'Laravel', star: 4 },
    { name: 'Python', star: 3 },
    { name: 'ReactNative', star: 4 },
    { name: 'jQuery', star: 5 },
    { name: 'WordPress', star: 2 },
    { name: 'Nuxt', star: 3 },
    { name: 'AWS', star: 3 },
    { name: 'Firebase', star: 5 },
    { name: 'MySQL', star: 3 },
    { name: 'C++(Arduino)', star: 2 },
    { name: 'Unity', star: 2 },
    { name: 'Swift', star: 1 },
    { name: 'Go', star: 1 },
    { name: '上記にない言語', star: 0 },
  ]

  return <AboutPresenter carriers={carriers} skills={skills} />
}
