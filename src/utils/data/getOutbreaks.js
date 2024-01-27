import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'

export default async function getOutbreaks ({ date }) {
  const outbreaks = await doFetch({
    url: '/api/outbreaks',
    params: {
      date
    }
  })
  console.log('List of outbreaks')
  console.log(outbreaks)
  return featureCollection(outbreaks)
}
