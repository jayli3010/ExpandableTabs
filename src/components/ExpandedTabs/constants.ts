export const ANIMATION_DURATION = {
  TEXT_OUT: 100,
  GATHER: 200,
  UN_GATHER: 200,
  ICON_SCALE: 0.1,
  TEXT_WIDTH: 0.1,
  TEXT_OPACITY: 0.1,
  TEXT_OPACITY_DELAY: 0.1,
  TEXT_EXIT_WIDTH: 0.1,
  TEXT_EXIT_OPACITY: 0.1,
} as const

export const SPRING_CONFIG = {
  CONTAINER_STIFFNESS: 400,
  CONTAINER_DAMPING: 30,
  BUTTON_STIFFNESS: 500,
  BUTTON_DAMPING: 35,
} as const

export const GAP = {
  IDLE: '6px',
  GATHERED: '2px',
} as const

export const SCALE = {
  NORMAL: 1,
  GATHERED: 0.85,
} as const

export const OPACITY = {
  NORMAL: 1,
  GATHERED: 0.8,
  HIDDEN: 0,
} as const
