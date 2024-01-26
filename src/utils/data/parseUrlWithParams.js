function parseParamValue (value) {
  if (value[0] === '[') {
    return value.slice(1, -1).split(',').map((k) => parseParamValue(k))
  } else if (value[0] === '{') {
    const arr = value.slice(1, -1).split(';')
    const res = {}
    for (const k of arr) {
      const aux = k.split('>')
      res[aux[0]] = parseParamValue(aux[1])
    }
    return res
  }
  const res = parseInt(value)
  return isNaN(res) ? value : res
}

export default function parseUrlWithParams (url) {
  const urlObject = new URLSearchParams(url)
  const params = {}
  for (const key of urlObject.keys()) {
    console.log(`${key}: ${urlObject.get(key)}`)
    params[key] = parseParamValue(urlObject.get(key))
  }
  return params
}
