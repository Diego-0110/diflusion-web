function stringifyParamValue (value) {
  if (Array.isArray(value)) {
    return `[${value.map(k => stringifyParamValue(k)).join(',')}]`
  } else if (typeof value === 'object') {
    return `{${Object.keys(value).map((key) =>
      `${key}>${stringifyParamValue(value[key])}`).join(';')}}`
  }
  return value.toString()
}

export default function makeUrlWithParams (url, params) {
  if (!params) {
    return url
  }
  const formattedParams = {}
  for (const param in params) {
    if (params[param] !== undefined && params[param] !== null) {
      console.log(param)
      formattedParams[param] = stringifyParamValue(params[param])
    }
  }
  const stringParams = new URLSearchParams(formattedParams).toString()
  return `${url}?${stringParams}`
}
