import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'
import makeUrlWithParams from './makeUrlWithParams'

export default async function traceRiskLevels ({ regionId, date }) {
  const riskRoutesUrl = makeUrlWithParams('/api/riskRoutes', { region: regionId, date })
  const riskRoutes = await doFetch(riskRoutesUrl)
  const outbreaksUrl = makeUrlWithParams('/api/outbreaks', {
    ids: riskRoutes.map((riskRoute) => ({
      date: riskRoute.outbreakDate,
      id: riskRoute.outbreakId
    }))
  })
  const outbreaks = await doFetch(outbreaksUrl)
  return {
    riskRoutes: featureCollection(riskRoutes),
    outbreaks: featureCollection(outbreaks)
  }
}
