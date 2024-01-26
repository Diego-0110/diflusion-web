import { featureCollection } from '@turf/helpers'
import doFetch from './doFetch'

export default async function getOutbreaks ({ date }) {
  const outbreaks = await doFetch({ url: '/api/outbreaks' })
  return featureCollection(outbreaks)
}
