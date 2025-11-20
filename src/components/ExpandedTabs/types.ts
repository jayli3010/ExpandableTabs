import { ComponentType } from 'react'

export interface Tab {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  type?: never
}

export interface Separator {
  id: string
  type: 'separator'
  title?: never
  icon?: never
}

export type TabItem = Tab | Separator

export interface ExpandedTabsProps {
  tabs: TabItem[]
  className?: string
  defaultSelectedId?: string
  onChange?: (id: string | null) => void
}
