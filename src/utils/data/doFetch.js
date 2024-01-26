import makeUrlWithParams from './makeUrlWithParams'

export default async function doFetch ({ url, params }) {
  const urlAndParams = makeUrlWithParams(url, params)
  const response = await fetch(urlAndParams)
  return (await response.json()).data
}
