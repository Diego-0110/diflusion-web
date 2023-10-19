'use client'
import useToggle from '@/utils/hooks/useToggle'
import { AirlineIcon, MaskIcon, RightArrowIcon, WarningIcon } from './icons'

const DATA = {
  alarms: {
    id: 1,
    text: 'Alarms',
    icon: <WarningIcon size={20} />
  },
  outbreaks: {
    id: 2,
    text: 'Outbreaks',
    icon: <MaskIcon size={24} />
  },
  migrations: {
    id: 3,
    text: 'Migrations',
    icon: <AirlineIcon size={20} />
  }
}

export default function MapDataSelection ({ currentData = DATA.alarms.id }) {
  const {
    isToggled: isHidden, handleClick
  } = useToggle(false)
  return (
    <section className="flex items-center gap-4 w-fit py-1 pl-4 pr-2 rounded-full text-on-primary font-medium bg-primary">
      <ul className="flex gap-6 text-on-primary-variant">
        {Object.values(DATA).map((data) => {
          if (data.id === currentData) {
            return (
              <li key={data.id} className="relative text-on-primary">
                <button className="flex items-center px-2 gap-2 after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-current"
                  type="button">
                  {data.icon} {data.text}
                </button>
              </li>
            )
          }
          if (isHidden) {
            return null
          }
          return (
            <li key={data.id} className="hover:text-on-primary">
              <button className="flex items-center px-2 gap-2" type="button">
                {data.icon} {data.text}
              </button>
            </li>
          )
        })}
      </ul>
      <button className="-scale-x-100" type="button" onClick={handleClick}>
        <RightArrowIcon size={20} />
      </button>
    </section>
  )
}
