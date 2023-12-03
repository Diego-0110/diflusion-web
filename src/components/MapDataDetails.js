import CircularGauge from './CircularGuage'
import Property from './Property'
import { CalendarIcon, LocationIcon, TraceIcon } from './icons'

export default function MapDataDetails ({ selectedDataInfo }) {
  if (selectedDataInfo.length < 1) {
    return null
  }
  const info = selectedDataInfo[selectedDataInfo.length - 1]
  return (
    <article className="bg-surface rounded-xl w-full px-3 py-6">
      <header className="mb-4">
        <div className="flex justify-center gap-10 mb-2">
          <CircularGauge value={info.level} />
          <div className="h-20 w-20 rounded-md bg-primary"></div>
        </div>
        <h1 className="text-xl font-bold text-balance">
          {info.regionName}
        </h1>
        <span className="block w-fit px-2 rounded-full text-sm text-on-primary bg-primary">
          #{info.regionId}
        </span>
      </header>
      <section className="px-2">
        <div className="mb-8">
          <Property name="Province" value={info.regionProvince}
            icon={<LocationIcon size={24} />}/>
          <Property name="Department" value={info.autCommunity}
            icon={<LocationIcon size={24} />}/>
          <Property name="Date" value={'27 Nov - 3 Dec. 2023'}
            icon={<CalendarIcon size={24} />}/>
        </div>
        <div className="flex justify-center">
          <button className="px-3 py-1 rounded-lg bg-primary text-on-primary"
            type="button">
            <TraceIcon size={16} className="inline" />
            &nbsp;Show Trace
          </button>
        </div>
        {/* <p className="break-words">
          {JSON.stringify(selectedDataInfo[selectedDataInfo.length - 1])}
        </p> */}
      </section>
    </article>
  )
}
