import { MAP_DATA_ID } from '@/constants/mapData'
import { useMapStore } from '@/utils/stores/useMapStore'
import OutbreakDetails from './OutbreakDetails'
import RiskLevelsDetails from './RiskLevelDetails'

export default function MapDataDetails () {
  const selectedDataInfo = useMapStore((state) => state.selectedDataInfo)
  const traceSelectedData = useMapStore((state) => state.traceSelectedData)
  if (selectedDataInfo.length < 1) {
    return null
  }
  const type = selectedDataInfo.slice(-1)[0].type
  const info = selectedDataInfo.slice(-1)[0].info
  const handleClick = () => {
    console.log('Trace:')
    traceSelectedData()
  }
  let details
  switch (type) {
    case MAP_DATA_ID.riskLevels:
      details = <RiskLevelsDetails info={info} trace={handleClick} />
      break
    case MAP_DATA_ID.outbreaks:
      details = <OutbreakDetails info={info} trace={handleClick} />
      break
    default:
      details = <h1>None</h1>
  }
  return (
    <article className="relative z-10 w-full max-h-[60%] overflow-auto sm:max-w-sm max-sm:absolute max-sm:bottom-0 max-sm:left-0 bg-surface sm:rounded-r-xl px-3 py-6 sm:border-y sm:border-r max-sm:border-t border-outline shadow-md">
      {details}
    </article>
  )
}
