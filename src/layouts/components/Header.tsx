import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HeaderLink from '~/layouts/components/HeaderLink';
import HeaderStyle from '~/styles/components/Header.module.scss';
import breakpoint from '~/utils/breakpoint';

interface Props {
  active: boolean;
  onClick: () => void;
  close: boolean;
}

const Header: FC<Props> = ({ active, onClick, close }) => {
  let open = false;
  if (process.browser) {
    const threshold = 50;
    open = !useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: threshold,
    });
  }

  const isWeb = breakpoint('md');
  const isMobile = !breakpoint(500);
  if (isWeb && !close) {
    return (
      <Fragment>
        <div className={clsx(HeaderStyle.appBar, { [HeaderStyle.active]: !open })}>
          <div className={HeaderStyle.logoWrapper}>
            <p className={HeaderStyle.logo}>
              <Link href="/">
                <a>PORTFOLIO</a>
              </Link>
            </p>
          </div>
          <div className={clsx(HeaderStyle.linkWrapper, { [HeaderStyle.active]: !open })}>
            <HeaderLink href="/" title="HOME" />
            <HeaderLink href="/about" title="ABOUT" />
            <HeaderLink href="/product" title="PRODUCT" />
            <HeaderLink href="/hobby" title="HOBBY" />
          </div>
        </div>
        <HamburgerButton onClick={onClick} active={active} />
      </Fragment>
    );
  } else if (!isMobile) {
    return (
      <Fragment>
        <div className={HeaderStyle.appBar}>
          <div className={HeaderStyle.logoWrapper}>
            <p className={HeaderStyle.logo}>
              <Link href="/">
                <a>PORTFOLIO</a>
              </Link>
            </p>
          </div>
        </div>
        <HamburgerButton onClick={onClick} active={active} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <HamburgerButton onClick={onClick} active={active} />
      </Fragment>
    );
  }
};

interface HamburgerButtonProps {
  onClick: () => void;
  active: boolean;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ onClick, active }) => {
  return (
    <div className={HeaderStyle.menuBtnWrapper} onClick={onClick}>
      <span className={clsx(HeaderStyle.menuBtn, { [HeaderStyle.menuBtnShow]: active })}>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  );
};

export default Header;
