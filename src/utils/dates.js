export function formatDateFromEpoch (timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString(process.env.NEXT_PUBLIC_LOCALE)
}
