'use client'
import useToggle from '@/utils/hooks/useToggle'
import { AirlineIcon, MaskIcon, RightArrowIcon, WarningIcon } from './icons'

import { DATA_MAP, DATA_ID, MAP_DATA_DETAILS } from '@/constants/mapData'

export default function MapDataSelection ({ currentDataId = DATA_ID.alarms, mainData, onUpdateSelection = (id) => { console.log(id) } }) {
  const {
    isToggled: isHidden, handleClick: handleToggleClick
  } = useToggle(true)
  const mainDataDetails = MAP_DATA_DETAILS[mainData]
  const handleClick = (dataId) => {
    onUpdateSelection(dataId)
    if (!isHidden) {
      handleToggleClick()
    }
  }
  return (
    <section className="flex items-start gap-2 w-fit py-2 pl-3 pr-2 rounded-br-xl text-on-primary text-sm bg-primary">
      <header className="flex items-center gap-3">
        <div className="relative text-on-primary">
          <button className="flex items-center px-2 gap-2"
            type="button" onClick={() => handleClick(mainData)}>
            {mainDataDetails.icon} {mainDataDetails.name}
          </button>
        </div>
        <button type="button" onClick={handleToggleClick}>
          {isHidden
            ? <RightArrowIcon className="rotate-90" size={20} />
            : <RightArrowIcon className="-rotate-90" size={20} />
          }
        </button>
      </header>
      {!isHidden && <ul className="absolute top-[calc(100%+4px)] left-0 flex flex-col gap-4 w-full py-2 px-3 rounded-r-lg text-on-surface bg-surface">
        {MAP_DATA_DETAILS.map(dataDetails => {
          if (dataDetails.id === mainData) {
            return null
          }
          return (
            <li key={dataDetails.id} className="hover:text-on-primary">
              <button className="flex items-center px-2 gap-2" type="button"
                onClick={() => handleClick(dataDetails.id)}>
                {dataDetails.icon} {dataDetails.name}
              </button>
            </li>
          )
        })}
      </ul>}
    </section>
  )
}
