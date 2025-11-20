import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Tab } from './types'
import { SPRING_CONFIG } from './constants'
import { iconVariants, textVariants } from './animations'

interface TabButtonProps {
  tab: Tab
  isSelected: boolean
  onClick: () => void
}

export function TabButton({ tab, isSelected, onClick }: TabButtonProps) {
  const Icon = tab.icon

  return (
    <motion.button
      layout
      onClick={onClick}
      className={clsx(
        'relative z-10 flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-colors focus:outline-none select-none',
        isSelected
          ? 'text-slate-900 dark:text-green-300'
          : 'text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100'
      )}
      transition={{
        type: 'spring',
        stiffness: SPRING_CONFIG.BUTTON_STIFFNESS,
        damping: SPRING_CONFIG.BUTTON_DAMPING,
      }}
    >
      {isSelected && (
        <motion.div
          layoutId="active-pill-background"
          className="absolute inset-0 z-0 rounded-full border border-green-400/30 bg-white shadow-sm backdrop-blur-sm dark:bg-green-500/20"
          transition={{
            type: 'spring',
            stiffness: SPRING_CONFIG.BUTTON_STIFFNESS,
            damping: SPRING_CONFIG.BUTTON_DAMPING,
          }}
        />
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        <motion.div
          layout
          variants={iconVariants}
          className="flex h-5 w-5 shrink-0 items-center justify-center"
        >
          <Icon className="h-full w-full" />
        </motion.div>

        <AnimatePresence mode="popLayout">
          {isSelected && (
            <motion.span
              layout
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="overflow-hidden origin-left"
            >
              <span className="block whitespace-nowrap pr-1">{tab.title}</span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  )
}
