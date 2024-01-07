import React from 'react'
import {
  AnimatePresence,
  motion
} from 'framer-motion'

const defaultInitialValues = {
  opacity: 0,
}

const defaultAnimateValues = {
  opacity: 1,
}

const defaultTransitionValues = {
  duration: 1
}

const PageAnimation = ({
  children,
  key,
  className,
  initial = defaultInitialValues,
  animate = defaultAnimateValues,
  transition = defaultTransitionValues
}) => {
  return (
    <AnimatePresence>
      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimation