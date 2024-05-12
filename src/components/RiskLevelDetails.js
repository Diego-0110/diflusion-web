import CircularGauge from './CircularGuage'
import Property from './Property'
import { CalendarIcon, LocationIcon, TraceIcon } from './icons'
import { formatDateFromEpoch } from '@/utils/dates'

export default function RiskLevelsDetails ({ info, trace }) {
  const formattedDate = `${formatDateFromEpoch(info.fromDate)} - ${formatDateFromEpoch(info.toDate)}`
  return (
    <>
    <header className="mb-4">
      <div className="flex justify-center gap-10 mb-2">
        <CircularGauge value={info.level} />
        <div className="h-20 w-20 rounded-md bg-primary"></div>
      </div>
      <h1 className="text-xl font-bold text-balance">
        {info.name}
      </h1>
      <span className="block w-fit px-2 rounded-full text-sm text-on-primary bg-primary">
        #{info.id}
      </span>
    </header>
    <section className="px-2">
      <div className="mb-8">
        <Property name="Province" value={info.adminDivNUT3}
          icon={<LocationIcon size={24} />}/>
        <Property name="Department" value={info.adminDivNUT2}
          icon={<LocationIcon size={24} />}/>
        <Property name="Date" value={formattedDate}
          icon={<CalendarIcon size={24} />}/>
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
