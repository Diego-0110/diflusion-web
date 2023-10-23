export default function MapMessage ({ show, message = 'Loading...' }) {
  if (!show) {
    return null
  }
  return (
    <p className="py-1 px-3 mt-1 text-on-surface-variant font-medium rounded-full bg-surface/70">
      {message}
    </p>
  )
}
