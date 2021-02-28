import { FC } from 'react';
import { InView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {
  open: object;
  closed: object;
  duration?: number;
  delay?: number;
  threshold?: number; // 0~1
}

const InViewAnimate: FC<Props> = ({ children, open, closed, duration, delay, threshold }) => {
  const variants = {
    open: open,
    closed: closed,
  };
  let isVisible = false;

  // 一番上かどうか
  let isTop = false;
  if (process.browser) {
    isTop = !useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: 50,
    });
  }

  return (
    <InView delay={delay} threshold={threshold}>
      {({ inView, ref }) => {
        if (isTop) isVisible = false;
        if (inView) isVisible = true;
        return (
          <div ref={ref}>
            <AnimatePresence initial={false}>
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
