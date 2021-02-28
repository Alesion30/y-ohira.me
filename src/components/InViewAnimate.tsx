import { FC } from 'react';
import { InView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {
  open: object;
  closed: object;
  duration?: number;
}

const InViewAnimate: FC<Props> = ({ children, open, closed, duration }) => {
  const variants = {
    open: open,
    closed: closed,
  };
  let isVisible = false;

  // 一番上かどうか
  let isTop = false;
  if (process.browser) {
    const threshold = 50;
    isTop = !useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: threshold,
    });
  }

  return (
    <InView>
      {({ inView, ref }) => {
        if (isTop) isVisible = false;
        if (inView) isVisible = true;
        return (
          <div ref={ref}>
            <AnimatePresence>
              <motion.div
                animate={isVisible ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: duration ?? 1 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        );
      }}
    </InView>
  );
};

export default InViewAnimate;
