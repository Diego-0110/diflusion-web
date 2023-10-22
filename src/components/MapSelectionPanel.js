import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'

export default function MapSelectionPanel ({ configuration }) {
  return (
    <section className="relative z-10 flex gap-2">
      <MapDataSelection />
      <MapDataOptions />
    </section>
  )
}
