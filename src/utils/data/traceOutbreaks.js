import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'
import makeUrlWithParams from './makeUrlWithParams'

export default async function traceOutbreaks ({ outbreakId, date }) {
  const riskRoutesUrl = makeUrlWithParams('/api/riskRoutes', { outbreak: outbreakId, date })
  const riskRoutes = await doFetch(riskRoutesUrl)
  const riskLevelsUrl = makeUrlWithParams('/api/riskLevels', {
    ids: riskRoutes.map((riskRoute) => ({
      date: riskRoute.riskDate,
      id: riskRoute.regionId
    }))
  })
  const riskLevels = await doFetch(riskLevelsUrl)
  return {
    riskRoutes: featureCollection(riskRoutes),
    riskLevels: featureCollection(riskLevels)
  }
}
