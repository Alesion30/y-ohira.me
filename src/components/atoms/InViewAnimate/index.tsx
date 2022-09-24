import { AnimatePresence, motion, Variant, Variants } from 'framer-motion'
import { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { useWindowScroll } from 'react-use'

type InViewAnimateProps = {
  open: Variant
  closed: Variant
  duration?: number
  delay?: number
  threshold?: number // 0~1
  children: React.ReactNode
}

export const InViewAnimate: FC<InViewAnimateProps> = ({
  children,
  closed,
  delay,
  duration,
  open,
  threshold,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const variants: Variants = {
    closed: closed,
    open: open,
  }

  // 一番上かどうか
  const { y } = useWindowScroll()
  const isTop = y < 50

  return (
    <InView delay={delay} threshold={threshold}>
      {({ inView, ref }) => {
        if (isTop) setIsVisible(false)
        if (inView) setIsVisible(true)
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
        )
      }}
    </InView>
  )
}
