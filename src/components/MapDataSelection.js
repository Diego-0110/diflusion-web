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
    <section className="relative flex items-start">
      <button type="button" className="relative flex justify-between w-44 py-2 pl-3 pr-2 rounded-br-xl text-on-primary text-sm bg-primary shadow-md"
        onClick={handleToggleClick} onBlur={() => console.log('leaving')}>
        <span className="flex gap-2">
          {mainDataDetails.icon} {mainDataDetails.name}
        </span>
        {isHidden
          ? <RightArrowIcon className="rotate-90" size={20} />
          : <RightArrowIcon className="-rotate-90" size={20} />
        }
        {!isHidden && <ul className="absolute top-[calc(100%+0.25em)] left-0 flex flex-col w-full overflow-hidden rounded-r-lg text-on-surface border-y border-r border-outline shadow-md">
          {MAP_DATA_DETAILS.map(dataDetails => {
            // if (dataDetails.id === mainData) {
            //   return null
            // }
            return (
              <li key={dataDetails.id} className="bg-surface hover:bg-surface-container">
                <button className="flex items-center w-full py-2 px-3 gap-2" type="button"
                  onClick={() => handleClick(dataDetails.id)}>
                  {dataDetails.icon} {dataDetails.name}
                </button>
              </li>
            )
          })}
        </ul>}
      </button>
    </section>
  )
}
