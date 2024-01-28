import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'

export default function MapSelectionPanel () {
  return (
    <section className="relative z-10 flex items-start gap-2">
      <MapDataSelection />
      <MapDataOptions />
      <input type="date" name="" id="" />
    </section>
  )
}
