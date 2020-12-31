import React, { FC } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from 'next/link';
import HeaderStyle from '~/styles/Header.module.css';

const Header: FC = () => {
  let trigger = false;
  if (process.browser) {
    trigger = useScrollTrigger({ target: window });
  }
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <div className={HeaderStyle.appBar}>
        <div>
          <p className={HeaderStyle.headerLogo}>PORTFOLIO</p>
        </div>
        <div>
          <HeaderLink href="/" title="HOME" />
          <HeaderLink href="/" title="ABOUT" />
          <HeaderLink href="/" title="PRODUCT" />
          <HeaderLink href="/" title="HOBBY" />
        </div>
      </div>
    </Slide>
  );
};

const HeaderLink: FC<{ title: string; href: string }> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a className={HeaderStyle.link}>{title}</a>
    </Link>
  );
};

export default Header;
