import { useState, useRef, useEffect } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import clsx from 'clsx'
import { ExpandedTabsProps } from './types'
import { ANIMATION_DURATION } from './constants'
import { containerVariants } from './animations'
import { TabButton } from './TabButton'
import { Separator } from './Separator'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function ExpandedTabs({
  tabs,
  className,
  defaultSelectedId,
  onChange,
}: ExpandedTabsProps) {
  const getDefaultId = () => {
    if (defaultSelectedId) return defaultSelectedId
    const firstTab = tabs.find((tab) => tab.type !== 'separator')
    return firstTab?.id || null
  }

  const [selectedId, setSelectedId] = useState<string | null>(getDefaultId())
  const [isGathered, setIsGathered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const defaultIdRef = useRef(getDefaultId())

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (selectedId !== defaultIdRef.current) {
          handleSelect(defaultIdRef.current)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [selectedId])

  const handleSelect = async (id: string | null) => {
    if (id === selectedId || isAnimating) return
    setIsAnimating(true)

    // Step 1: Text out animation
    if (selectedId !== null) {
      setSelectedId(null)
      await wait(ANIMATION_DURATION.TEXT_OUT)
    }

    // Step 2: Gather animation
    setIsGathered(true)
    await wait(ANIMATION_DURATION.GATHER)

    // Step 3: Un-gather animation
    setIsGathered(false)
    await wait(ANIMATION_DURATION.UN_GATHER)

    // Step 4: Text in animation
    if (id !== null) {
      setSelectedId(id)
      onChange?.(id)
    }
    setIsAnimating(false)
  }

  return (
    <LayoutGroup>
      <motion.div
        ref={containerRef}
        layout
        variants={containerVariants}
        initial="idle"
        animate={isGathered ? 'gathered' : 'idle'}
        className={clsx(
          'select-none cursor-default',
          'flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/70 p-1.5 shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-black',
          className
        )}
      >
        {tabs.map((tab) => {
          if (tab.type === 'separator') {
            return <Separator key={tab.id} />
          }

          return (
            <TabButton
              key={tab.id}
              tab={tab}
              isSelected={selectedId === tab.id}
              onClick={() => handleSelect(tab.id)}
            />
          )
        })}
      </motion.div>
    </LayoutGroup>
  )
}
