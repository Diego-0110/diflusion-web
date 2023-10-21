import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'

export default function MapSelectionPanel ({}) {
  return (
    <section className="relative z-10" className="flex gap-2">
      <MapDataSelection />
      <MapDataOptions />
    </section>
  )
}
