import { HeaderPresenter } from './presenter';

export const Header: React.VFC = () => {
  const links = [
    { href: '/about', name: 'About' },
    { href: '/product', name: 'Product' },
    { href: '/hobby', name: 'Hobby' },
  ];
  return <HeaderPresenter links={links} />;
};
