import { SettingsPanoramaIcon } from './icons'

export default function MapDataOptions ({}) {
  return (
    <div>
      <button className="flex items-center justify-center w-10 h-10 rounded-full text-on-primary bg-primary" type="button">
        <SettingsPanoramaIcon size={24} />
      </button>
    </div>
  )
}
