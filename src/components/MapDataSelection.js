'use client'
import useToggle from '@/utils/hooks/useToggle'
import { AirlineIcon, MaskIcon, RightArrowIcon, WarningIcon } from './icons'

import { DATA_MAP, DATA_ID } from '@/constants/mapData'

export default function MapDataSelection ({ currentDataId = DATA_ID.alarms, onUpdateSelection = (id) => { console.log(id) } }) {
  const {
    isToggled: isHidden, handleClick: handleToggleClick
  } = useToggle(true)
  const currentData = DATA_MAP[currentDataId]
  const handleClick = (dataId) => {
    onUpdateSelection(dataId)
    if (!isHidden) {
      handleToggleClick()
    }
  }
  return (
    <section className="flex flex-col items-start gap-4 w-fit py-2 pl-4 pr-2 rounded-[1.25em] text-on-primary font-medium bg-primary">
      <header className="flex items-center gap-3">
        <div className="relative text-on-primary">
          <button className="flex items-center px-2 gap-2 after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-current"
            type="button" onClick={() => handleClick(currentDataId)}>
            {currentData.icon} {currentData.text}
          </button>
        </div>
        <button type="button" onClick={handleToggleClick}>
          {isHidden
            ? <RightArrowIcon className="rotate-90" size={20} />
            : <RightArrowIcon className="-rotate-90" size={20} />
          }
        </button>
      </header>
      {!isHidden && <ul className="flex flex-col gap-4 text-on-primary-variant">
        {Object.entries(DATA_MAP).map(([id, data]) => {
          if (id === currentDataId) {
            return null
          }
          return (
            <li key={id} className="hover:text-on-primary">
              <button className="flex items-center px-2 gap-2" type="button"
                onClick={() => handleClick(id)}>
                {data.icon} {data.text}
              </button>
            </li>
          )
        })}
      </ul>}
    </section>
  )
}
