'use client'
import useToggle from '@/utils/hooks/useToggle'
import { SettingsPanoramaIcon } from './icons'

export default function MapDataOptions ({ options }) {
  const {
    isToggled,
    handleClick
  } = useToggle(false)
  return (
    <div className="relative">
      <button className="flex items-center justify-center w-10 h-10 rounded-full text-on-primary bg-primary"
        type="button" onClick={handleClick}>
        <SettingsPanoramaIcon size={24} />
      </button>
      {isToggled && <section className="relative top-1">
        <section className="absolute left-1/2 -translate-x-1/2 p-2 rounded-2xl bg-surface">
          <h2 className="font-bold">Options</h2>
        </section>
      </section>}
    </div>
  )
}
