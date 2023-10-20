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

export default function MapDataSelection ({ currentDataId = DATA.alarms.id, handleDataClick = (id) => { console.log(id) } }) {
  const {
    isToggled: isHidden, handleClick: handleToggleClick
  } = useToggle(false)
  const currentData = Object.values(DATA).find(data => data.id === currentDataId)
  return (
    <section className="flex max-sm:flex-col items-center max-sm:items-start gap-4 w-fit py-2 pl-4 pr-2 rounded-full max-sm:rounded-[1.25em] text-on-primary font-medium bg-primary">
      <header className="flex items-center gap-3">
        <div className="relative text-on-primary">
          <button className="flex items-center px-2 gap-2 after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-current"
            type="button" onClick={() => handleDataClick(currentData.id)}>
            {currentData.icon} {currentData.text}
          </button>
        </div>
        <button className="max-sm:hidden" type="button" onClick={handleToggleClick}>
          {isHidden
            ? <RightArrowIcon size={20} />
            : <RightArrowIcon className="rotate-180" size={20} />
          }
        </button>
        <button className="sm:hidden" type="button" onClick={handleToggleClick}>
          {isHidden
            ? <RightArrowIcon className="rotate-90" size={20} />
            : <RightArrowIcon className="-rotate-90" size={20} />
          }
        </button>
      </header>
      {!isHidden && <ul className="flex max-sm:flex-col gap-4 text-on-primary-variant">
        {Object.values(DATA).map((data) => {
          if (data.id === currentDataId) {
            return null
          }
          return (
            <li key={data.id} className="hover:text-on-primary">
              <button className="flex items-center px-2 gap-2" type="button"
                onClick={() => handleDataClick(data.id)}>
                {data.icon} {data.text}
              </button>
            </li>
          )
        })}
      </ul>}
    </section>
  )
}
