import { featureCollection, feature } from '@turf/helpers'
import doFetch from './doFetch'

export default async function getOutbreaks ({ date }) {
  const outbreaks = await doFetch({
    url: '/api/outbreaks',
    params: {
      date: 1703808000000 // TODO remove
    }
  })
  const featureList = outbreaks.map((o) => {
    const { coords, ...props } = o
    return feature(
      { type: 'Point', coordinates: coords },
      props
    )
  })
  console.log('List of outbreaks')
  console.log(featureList)
  return featureCollection(featureList)
}
