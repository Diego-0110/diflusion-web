import { featureCollection, feature } from '@turf/helpers'

import doFetch from './doFetch'

function getTypeOfCoords (coords) {
  // TODO fins a better way to get type
  if (Array.isArray(coords[0][0][0])) {
    return 'MultiPolygon'
  }
  return 'Polygon'
}

export default async function getRiskLevels ({ date }) { // TODO regions as arg
  const regions = await doFetch({ url: '/api/regions' }) // TODO update constants
  const riskLevels = await doFetch({ url: '/api/riskLevels', params: { date } })
  const featureList = regions.map((region) => {
    const { coords, ...props } = region
    const riskLevel = riskLevels.find((risk) =>
      risk.regionId === region.id)
    return feature(
      { type: getTypeOfCoords(coords), coordinates: coords },
      { ...props, level: riskLevel.level, date: riskLevel.date }
    )
  })
  return featureCollection(featureList)
}
