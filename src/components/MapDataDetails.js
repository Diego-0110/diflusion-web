import { MAP_DATA_ID } from '@/constants/mapData'
import CircularGauge from './CircularGuage'
import Property from './Property'
import { CalendarIcon, LocationIcon, TraceIcon } from './icons'

import traceRiskLevels from '@/utils/data/traceRiskLevel'
import { useMapStore } from '@/utils/stores/useMapStore'

export default function MapDataDetails ({ onMapDataUpdate }) {
  const selectedDataInfo = useMapStore((state) => state.selectedDataInfo)
  const traceSelectedData = useMapStore((state) => state.traceSelectedData)
  if (selectedDataInfo.length < 1) {
    return null
  }
  const info = selectedDataInfo.slice(-1)[0].info
  const handleClick = () => {
    console.log('PreFetching:')
    traceSelectedData()
    // traceRiskLevels({ regionId: info.regionId }).then(
    //   ({ outbreaks, riskRoutes }) => {
    //     onMapDataUpdate([
    //       {
    //         id: MAP_DATA_ID.outbreaks,
    //         data: outbreaks
    //       },
    //       {
    //         id: MAP_DATA_ID.riskRoutes,
    //         data: riskRoutes
    //       }
    //     ])
    //   })
    // fetch(`/api/riskRoutes?region=${info.regionId}`)
    //   .then(async response => {
    //     const riskRoutes = (await response.json()).data
    //     console.log('RiskRoutes with MigrationRoute:')
    //     console.log(riskRoutes)
    //     const migrationIds = riskRoutes.map(riskRoute => riskRoute.migrationId).join(',')
    //     fetch(`/api/migrationRoutes?region=${info.regionId}&ids=${migrationIds}`)
    //       .then(async response => {
    //         const migrationRoutes = (await response.json()).migrationRoutes
    //         console.log(migrationRoutes)
    //         const riskRoutesFeatures = migrationRoutes.map(migrationRoute => {
    //           const riskRoute = riskRoutes.find(riskRoute =>
    //             riskRoute.migrationId === migrationRoute.properties.id)
    //           return {
    //             ...migrationRoute,
    //             properties: {
    //               ...migrationRoute.properties,
    //               ...riskRoute
    //             }
    //           }
    //         })
    //         const outbreaksUrl = makeUrlWithParams('/api/outbreaks', {
    //           ids: riskRoutes.map(riskRoute =>
    //             ({ date: riskRoute.outbreakDate, id: riskRoute.outbreakId }))
    //         })
    //         const riskRoutesCollection = featureCollection(riskRoutesFeatures)
    //         fetch(outbreaksUrl)
    //           .then(async response => {
    //             const outbreaks = (await response.json()).data
    //             const allOutbreaks = outbreaks.reduce((acc, currVal) => [...acc, ...currVal.outbreaks], [])
    //             const outbreaksCollection = featureCollection(allOutbreaks)
    //             onMapDataUpdate([
    //               {
    //                 id: MAP_DATA_ID.outbreaks,
    //                 data: outbreaksCollection
    //               },
    //               {
    //                 id: MAP_DATA_ID.riskRoutes,
    //                 data: riskRoutesCollection
    //               }
    //             ])
    //           })
    //       })
    //   })
  }
  return (
    <article className="bg-surface sm:rounded-r-xl w-full px-3 py-6 sm:border-y sm:border-r max-sm:border-t border-outline shadow-md">
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
            type="button" onClick={handleClick}>
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
