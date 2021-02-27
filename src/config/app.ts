interface App {
  title: string;
  description: string;
  url: string;
  siteName: string;
  image: string;
  type: string;
  themeColor: string;
}

const appConfig: App = {
  title: 'Web Engineer from Kyushu University',
  description:
    '九州大学出身の学生Webエンジニアです。LaravelやReactを用いたフルスタック開発をはじめ、Flutterを用いたアプリ開発やWordPressを用いたCMS運用を行なっております。',
  url: 'https://ohira-engineer.vercel.app',
  siteName: 'PORTFOLIO',
  image: '/images/ogimage.png',
  type: 'website',
  themeColor: '#008CD6',
};

export default appConfig;
