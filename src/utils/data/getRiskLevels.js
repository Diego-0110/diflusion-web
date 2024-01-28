import { featureCollection } from '@turf/helpers'

import doFetch from './doFetch'

export default async function getRiskLevels ({ date }) { // TODO regions as arg
  const regions = await doFetch({ url: '/api/regions' }) // TODO update constants
  const riskLevels = await doFetch({ url: '/api/riskLevels', params: { date } })
  const featureList = regions.map((region) => {
    const riskLevel = riskLevels.find((risk) =>
      risk.regionId === region.properties.regionId)
    return {
      ...region,
      properties: { ...region.properties, level: riskLevel.level }
    }
  })
  return featureCollection(featureList)
}
