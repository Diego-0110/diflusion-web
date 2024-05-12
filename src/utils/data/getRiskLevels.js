import { featureCollection, feature } from '@turf/helpers'

import doFetch from './doFetch'

export default async function getRiskLevels ({ date }) { // TODO regions as arg
  const regions = await doFetch({ url: '/api/regions' }) // TODO update constants
  const riskLevels = await doFetch({ url: '/api/riskLevels', params: { date } })
  // console.log(regions[0])
  // console.log(riskLevels[0])
  const featureList = []
  for (const region of regions) {
    const { geo, ...props } = region
    const riskLevel = riskLevels.find((risk) =>
      risk.regionId === region.id)
    if (riskLevel) {
      const { regionId, ...riskLevelProps } = riskLevel
      // console.log(riskLevel)
      featureList.push(feature(
        geo,
        { ...props, ...riskLevelProps }
      ))
    }
  }
  return featureCollection(featureList)
}
