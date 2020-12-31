import React, { FC } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import HeaderLink from '~/layouts/components/HeaderLink';
import HeaderStyle from '~/styles/Header.module.scss';

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
          <HeaderLink href="/about" title="ABOUT" />
          <HeaderLink href="/product" title="PRODUCT" />
          <HeaderLink href="/hobby" title="HOBBY" />
        </div>
      </div>
    </Slide>
  );
};

export default Header;
