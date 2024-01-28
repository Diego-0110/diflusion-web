'use client'
import useToggle from '@/utils/hooks/useToggle'
import { RightArrowIcon } from './icons'

import { MAP_DATA_DETAILS } from '@/constants/mapData'
import { useMapStore } from '@/utils/stores/useMapStore'

export default function MapDataSelection () {
  const {
    isToggled: isHidden, handleClick: handleToggleClick
  } = useToggle(true)
  const setMapMode = useMapStore((state) => state.setMapMode)
  const mapMode = useMapStore((state) => state.mapMode)
  const mainDataDetails = MAP_DATA_DETAILS[mapMode]
  const handleClick = (dataId) => {
    // onUpdateSelection(dataId)
    setMapMode(dataId)
    if (!isHidden) {
      handleToggleClick()
    }
  }
  return (
    <section className="relative">
      <button type="button" className="relative flex justify-between w-44 py-2 pl-3 pr-2 rounded-br-xl text-on-primary text-sm bg-primary shadow-md"
        onClick={handleToggleClick} onBlur={() => console.log('leaving')}>
        <span className="flex gap-2">
          {mainDataDetails.icon} {mainDataDetails.name}
        </span>
        {isHidden
          ? <RightArrowIcon className="rotate-90" size={20} />
          : <RightArrowIcon className="-rotate-90" size={20} />
        }
      </button>
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
    </section>
  )
}
