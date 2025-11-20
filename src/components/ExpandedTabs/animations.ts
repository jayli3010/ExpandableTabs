import { Variants } from 'framer-motion'
import { ANIMATION_DURATION, SPRING_CONFIG, GAP, SCALE, OPACITY } from './constants'

export const containerVariants: Variants = {
  idle: {
    gap: GAP.IDLE,
    transition: {
      type: 'spring',
      stiffness: SPRING_CONFIG.CONTAINER_STIFFNESS,
      damping: SPRING_CONFIG.CONTAINER_DAMPING,
    },
  },
  gathered: {
    gap: GAP.GATHERED,
    transition: {
      type: 'spring',
      stiffness: SPRING_CONFIG.CONTAINER_STIFFNESS,
      damping: SPRING_CONFIG.CONTAINER_DAMPING,
    },
  },
}

export const iconVariants: Variants = {
  idle: { scale: SCALE.NORMAL, opacity: OPACITY.NORMAL },
  gathered: {
    scale: SCALE.GATHERED,
    opacity: OPACITY.GATHERED,
    transition: { duration: ANIMATION_DURATION.ICON_SCALE, ease: 'easeInOut' },
  },
}

export const textVariants: Variants = {
  initial: { width: 0, opacity: OPACITY.HIDDEN },
  animate: {
    width: 'auto',
    opacity: OPACITY.NORMAL,
    transition: {
      width: { duration: ANIMATION_DURATION.TEXT_WIDTH, ease: [0.2, 0, 0.2, 1] },
      opacity: {
        duration: ANIMATION_DURATION.TEXT_OPACITY,
        delay: ANIMATION_DURATION.TEXT_OPACITY_DELAY,
      },
    },
  },
  exit: {
    width: 0,
    opacity: OPACITY.HIDDEN,
    transition: {
      width: { duration: ANIMATION_DURATION.TEXT_EXIT_WIDTH, ease: 'easeInOut' },
      opacity: { duration: ANIMATION_DURATION.TEXT_EXIT_OPACITY },
    },
  },
}
