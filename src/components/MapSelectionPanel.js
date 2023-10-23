import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'

export default function MapSelectionPanel ({ configuration, handleSelection }) {
  return (
    <section className="relative z-10 flex gap-2">
      <MapDataSelection currentDataId={configuration} handleDataClick={handleSelection} />
      <MapDataOptions />
    </section>
  )
}
