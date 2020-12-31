import React, { FC } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HeaderLink from '~/layouts/components/HeaderLink';
import HeaderStyle from '~/styles/Header.module.scss';
import { Transition } from 'react-transition-group';

const DEFAULT_APPBAR_STYLE = {
  transition: 'all 0.5s ease',
  width: 280,
};

const APPBAR_STYLE: { [key: string]: object } = {
  entering: {
    width: 280,
  },
  entered: {
    width: 660,
  },
  exiting: {
    width: 660,
  },
  exited: {
    width: 280,
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

const Header: FC = () => {
  let trigger = true;
  if (process.browser) {
    const threshold = 200;
    trigger = useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: threshold,
    });
  }
  return (
    <Transition in={!trigger} timeout={5000}>
      {(state) => (
        <div className={HeaderStyle.appBar} style={{ ...DEFAULT_APPBAR_STYLE, ...APPBAR_STYLE[state] }}>
          <div className={HeaderStyle.logoWrapper}>
            <p className={HeaderStyle.logo}>PORTFOLIO</p>
          </div>
          <div className={HeaderStyle.linkWrapper} style={{ ...DEFAULT_LINKGROUP_STYLE, ...LINKGROUP_STYLE[state] }}>
            <HeaderLink href="/" title="HOME" />
            <HeaderLink href="/about" title="ABOUT" />
            <HeaderLink href="/product" title="PRODUCT" />
            <HeaderLink href="/hobby" title="HOBBY" />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Header;
