import { feature, featureCollection } from '@turf/helpers'
import doFetch from './doFetch'
import greatCircle from '@turf/great-circle'

export default async function traceRiskLevels ({ regionId, fromDate, toDate }) {
  const tracedRiskRoutes = await doFetch({
    url: '/api/riskLevels/trace',
    params: { regionId, fromDate, toDate }
  })
  const featureRiskRoutes = []
  const featureOutbreaks = []
  for (const rr of tracedRiskRoutes) {
    const { outbreaks, migration } = rr
    featureOutbreaks.push(...outbreaks.map((o) => {
      const { loc, ...props } = o
      return feature(loc, props)
    }))
    const { from, to, ...props } = migration
    featureRiskRoutes.push(greatCircle(from.loc.coordinates, to.loc.coordinates,
      { properties: props }))
  }
  return {
    riskRoutes: featureCollection(featureRiskRoutes),
    outbreaks: featureCollection(featureOutbreaks)
  }
}
