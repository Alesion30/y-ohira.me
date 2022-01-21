import { InView } from 'react-intersection-observer';
import { motion, AnimatePresence, Variants, Variant } from 'framer-motion';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

type InViewAnimateProps = {
  open: Variant;
  closed: Variant;
  duration?: number;
  delay?: number;
  threshold?: number; // 0~1
  children: React.ReactNode;
};

export const InViewAnimate: React.VFC<InViewAnimateProps> = ({
  open,
  closed,
  duration,
  delay,
  threshold,
  children,
}) => {
  const variants: Variants = {
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
