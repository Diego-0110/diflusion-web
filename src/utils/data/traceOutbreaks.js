import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'

export default async function traceOutbreaks ({ outbreakId, date }) {
  // TODO add date to data
  const riskRoutes = await doFetch({
    url: '/api/riskRoutes', params: { outbreak: outbreakId, date }
  })
  console.log('Trace Outbreaks (riskRoutes):')
  console.log(riskRoutes)
  const riskLevels = await doFetch({
    url: '/api/riskLevels',
    params: {
      ids: riskRoutes.map((riskRoute) => ({
        date: riskRoute.riskDate,
        id: riskRoute.regionId
      }))
    }
  })
  return {
    riskRoutes: featureCollection(riskRoutes),
    riskLevels: featureCollection(riskLevels)
  }
}
