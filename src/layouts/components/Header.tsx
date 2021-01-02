import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HeaderLink from '~/layouts/components/HeaderLink';
import HeaderStyle from '~/styles/components/Header.module.scss';
import { Transition } from 'react-transition-group';
import breakpoint from '~/utils/breakpoint';

const headerWidth = [280, 660];

const DEFAULT_APPBAR_STYLE = {
  transition: 'all 0.5s ease',
  width: headerWidth[0],
};

const APPBAR_STYLE: { [key: string]: object } = {
  entering: {
    width: headerWidth[0],
  },
  entered: {
    width: headerWidth[1],
  },
  exiting: {
    width: headerWidth[1],
  },
  exited: {
    width: headerWidth[0],
  },
};

const DEFAULT_LINKGROUP_STYLE = {
  transition: 'all .2s ease',
  opacity: 0,
};

const LINKGROUP_STYLE: { [key: string]: object } = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 1,
  },
  exited: {
    opacity: 0,
  },
};

interface Props {
  active: boolean;
  onClick: () => void;
}

const Header: FC<Props> = ({ active, onClick }) => {
  // ヘッダーの開閉
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
  if (isWeb) {
    return (
      <Transition in={open} timeout={10000}>
        {(state) => (
          <div className={HeaderStyle.appBar} style={{ ...DEFAULT_APPBAR_STYLE, ...APPBAR_STYLE[state] }}>
            <div className={HeaderStyle.logoWrapper}>
              <p className={HeaderStyle.logo}>
                <Link href="/">
                  <a>PORTFOLIO</a>
                </Link>
              </p>
            </div>
            <div className={HeaderStyle.linkWrapper} style={{ ...DEFAULT_LINKGROUP_STYLE, ...LINKGROUP_STYLE[state] }}>
              <HeaderLink href="/" title="HOME" />
              <HeaderLink href="/about" title="ABOUT" />
              <HeaderLink href="/product" title="PRODUCT" />
              <HeaderLink href="/hobby" title="HOBBY" />
            </div>
            <div className={HeaderStyle.menuBtnWrapper} onClick={onClick}>
              <span className={classNames(HeaderStyle.menuBtn, { [HeaderStyle.menuBtnShow]: active })}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        )}
      </Transition>
    );
  } else if (!isMobile) {
    return (
      <div className={HeaderStyle.appBar} style={{ ...DEFAULT_APPBAR_STYLE }}>
        <div className={HeaderStyle.logoWrapper}>
          <p className={HeaderStyle.logo}>
            <Link href="/">
              <a>PORTFOLIO</a>
            </Link>
          </p>
        </div>
        <div className={HeaderStyle.menuBtnWrapper} onClick={onClick}>
          <span className={classNames(HeaderStyle.menuBtn, { [HeaderStyle.menuBtnShow]: active })}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={HeaderStyle.menuBtnWrapper} onClick={onClick}>
        <span className={classNames(HeaderStyle.menuBtn, { [HeaderStyle.menuBtnShow]: active })}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    );
  }
};

export default Header;
