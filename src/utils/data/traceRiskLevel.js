import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'
import makeUrlWithParams from './makeUrlWithParams'

export default async function traceRiskLevels ({ regionId, date }) {
  const riskRoutes = await doFetch({
    url: '/api/riskRoutes',
    params: { region: regionId, date }
  })
  console.log(riskRoutes)
  const outbreaksGrouped = await doFetch({
    url: '/api/outbreaks',
    params: {
      ids: riskRoutes.map((riskRoute) => ({
        date: riskRoute.properties.outbreakDate,
        id: riskRoute.properties.outbreakId
      }))
    }
  })
  console.log('Grouped Outbreaks')
  console.log(outbreaksGrouped)
  // TODO add date to every outbreak
  const allOutbreaks = outbreaksGrouped.reduce((acc, currVal) =>
    [...acc, ...currVal.outbreaks], [])
  return {
    riskRoutes: featureCollection(riskRoutes),
    outbreaks: featureCollection(allOutbreaks)
  }
}
