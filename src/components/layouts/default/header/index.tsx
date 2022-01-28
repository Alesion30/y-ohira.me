import { HeaderPresenter } from './presenter';

export const Header: React.VFC = () => {
  const links = [
    { href: '/about', name: 'ABOUT' },
    { href: '/product', name: 'PRODUCT' },
    { href: '/blog', name: 'BLOG' },
  ];
  return <HeaderPresenter links={links} />;
};
