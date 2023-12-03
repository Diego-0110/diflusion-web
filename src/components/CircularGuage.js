export default function CircularGauge ({ value, maxValue, minValue, property }) {
  return (
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary">
      <span className="text-xl text-on-primary">{value}</span>
    </div>
  )
}
