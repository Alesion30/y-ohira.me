import React, { FC, useCallback } from 'react';
import { animateScroll } from 'react-scroll';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

interface Props {
  bottom?: number;
  right?: number;
  threshold?: number;
}

const ScrollTopButton: FC<Props> = ({ bottom, right, threshold }) => {
  let trigger = false;
  if (process.browser) {
    const _threshold = threshold ?? 100;
    trigger = useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: _threshold,
    });
  }
  const scrollToTop = useCallback(() => animateScroll.scrollToTop(), []);
  const _bottom = bottom ?? 30;
  const _right = right ?? 30;
  return (
    <Zoom in={trigger}>
      <div onClick={scrollToTop} role="presentation" style={{ position: 'fixed', bottom: _bottom, right: _right }}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollTopButton;
