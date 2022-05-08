import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { AnimatePresence, motion, Variant, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';

type InViewAnimateProps = {
  open: Variant;
  closed: Variant;
  duration?: number;
  delay?: number;
  threshold?: number; // 0~1
  children: React.ReactNode;
};

export const InViewAnimate: React.FC<InViewAnimateProps> = ({ children, closed, delay, duration, open, threshold }) => {
  const variants: Variants = {
    closed: closed,
    open: open,
  };
  let isVisible = false;

  // 一番上かどうか
  let isTop = false;
  isTop = !useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== 'undefined' ? window : undefined,
    threshold: 50,
  });

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
                transition={{ duration: duration ?? 1 }}
                variants={variants}
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
