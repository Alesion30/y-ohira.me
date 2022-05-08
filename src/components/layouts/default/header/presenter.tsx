import Link from 'next/link';

import style from './style.module.scss';

export type HeaderProps = {
  links: { href: string; name: string }[];
};

export const HeaderPresenter: React.FC<HeaderProps> = ({ links }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <Link href="/">
          <a className={style.topLink}>PORTFOLIO</a>
        </Link>
        {links.map((link) => {
          return (
            <Link key={`header_link_${link.href}`} href={link.href}>
              <a className={style.link}>{link.name}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
