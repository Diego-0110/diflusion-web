import CircularGauge from './CircularGuage'
import Property from './Property'
import { CalendarIcon, FeatherIcon, LocationIcon, MicroBiologyIcon, TraceIcon } from './icons'

export default function OutbreakDetails ({ info, trace }) {
  const speciesJSX = info.species.map((e) => {
    if (!e.commonName && !e.scientificName) {
      return e.type ? `${e.type} Bird` : 'Unknow Bird'
    }
    return (
      `${e.commonName}${e.scientificName ? '/' + e.scientificName : ''} (${e.type})`
    )
  })
  return (
    <>
    <header className="mb-4">
      <div className="flex justify-center gap-10 mb-2">
        <CircularGauge value={info.cases} />
        <div className="h-20 w-20 rounded-md bg-primary"></div>
      </div>
      <h1 className="text-xl font-bold text-balance">
        {info.city}
      </h1>
      <span className="block w-fit px-2 rounded-full text-sm text-on-primary bg-primary">
        #{info.id}
      </span>
    </header>
    <section className="px-2">
      <div className="mb-8">
        <Property name="Country" value={info.country}
          icon={<LocationIcon size={24} />}/>
        <Property name="City" value={info.city}
          icon={<LocationIcon size={24} />}/>
        <Property name="Date" value={info.date || '23 Jan. 24'}
          icon={<CalendarIcon size={24} />}/>
        <Property name="Serotype" value={info.serotype}
          icon={<MicroBiologyIcon size={24} />}/>
        <Property name="Species" value={speciesJSX}
          icon={<FeatherIcon size={24} />}/>
      </div>
      <div className="flex justify-center">
        <button className="px-3 py-1 rounded-lg bg-primary text-on-primary"
          type="button" onClick={trace}>
          <TraceIcon size={16} className="inline" />
          &nbsp;Show Trace
        </button>
      </div>
    </section>
    </>
  )
}
