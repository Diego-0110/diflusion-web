import { feature, featureCollection } from '@turf/helpers'
import doFetch from './doFetch'
import greatCircle from '@turf/great-circle'

export default async function traceRiskLevels ({ regionId, date }) {
  const riskRoutes = await doFetch({
    url: '/api/riskRoutes',
    params: { region: regionId, date }
  })
  console.log(riskRoutes)
  const outbreaks = await doFetch({
    url: '/api/outbreaks',
    params: {
      ids: riskRoutes.map((riskRoute) => riskRoute.outbreakId)
    }
  })
  return {
    riskRoutes: featureCollection(riskRoutes.map((r) => {
      const { coords, ...props } = r
      return greatCircle(coords[0], coords[1], { properties: props })
    })),
    outbreaks: featureCollection(outbreaks.map((o) => {
      const { coords, ...props } = o
      return feature({ type: 'Point', coordinates: coords }, props)
    }))
  }
}
