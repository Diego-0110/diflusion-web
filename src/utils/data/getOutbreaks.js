import { featureCollection, feature } from '@turf/helpers'
import doFetch from './doFetch'

export default async function getOutbreaks ({ date }) {
  const outbreaks = await doFetch({
    url: '/api/outbreaks',
    params: {
      date
    }
  })
  const featureList = outbreaks.map((o) => {
    const { loc, ...props } = o
    return feature(
      loc,
      props
    )
  })
  console.log('List of outbreaks')
  console.log(featureList)
  return featureCollection(featureList)
}
