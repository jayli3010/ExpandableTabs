import { ExpandedTabs, TabItem } from './components/ExpandedTabs'
import { HomeIcon, UserIcon, MailIcon, SettingsIcon } from './examples/icons'

const tabs: TabItem[] = [
  { id: 'home', title: 'Home', icon: HomeIcon },
  { id: 'profile', title: 'Profile', icon: UserIcon },
  { id: 'messages', title: 'Messages', icon: MailIcon },
  { id: 'sep1', type: 'separator' },
  { id: 'settings', title: 'Settings', icon: SettingsIcon },
]

export default function App() {
  const handleChange = (id: string | null) => {
    console.log('Selected tab:', id)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-100 p-4 dark:bg-slate-900">
      <div className="w-[285px]">
        <ExpandedTabs
          tabs={tabs}
          defaultSelectedId="home"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
