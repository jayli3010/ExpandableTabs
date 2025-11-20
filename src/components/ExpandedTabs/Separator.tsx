import { motion } from 'framer-motion'
import { iconVariants } from './animations'

export function Separator() {
  return (
    <motion.div
      layout
      variants={iconVariants}
      className="h-6 w-px shrink-0 bg-slate-200 dark:bg-slate-700"
      aria-hidden="true"
    />
  )
}
