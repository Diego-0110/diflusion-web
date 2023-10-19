import { AirlineIcon, MaskIcon, RightArrowIcon, WarningIcon } from './icons'

export default function MapDataSelection ({}) {
  return (
    <section className="flex items-center gap-4 w-fit py-1 pl-3 pr-2 rounded-full text-on-primary-variant font-medium bg-primary">
      <ul className="flex gap-6">
        <li className="hover:text-on-primary text-on-primary">
          <button className="flex items-center pt-1 px-2 gap-2 border-b-2 border-on-primary" type="button">
            <WarningIcon size={20} />
            Alarms
          </button>
        </li>
        <li className="hover:text-on-primary">
          <button className="flex items-center py-1 px-2 gap-2" type="button">
            <MaskIcon size={24} />
            Outbreaks
          </button>
        </li>
        <li className="hover:text-on-primary">
          <button className="flex items-center py-1 px-2 gap-2" type="button">
            <AirlineIcon size={20} />
            Migrations
          </button>
        </li>
      </ul>
      <button className="-scale-x-100" type="button">
        <RightArrowIcon size={20} />
      </button>
    </section>
  )
}
