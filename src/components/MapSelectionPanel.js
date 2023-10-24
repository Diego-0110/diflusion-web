import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'

export default function MapSelectionPanel ({ conf, onUpdateSelection }) {
  return (
    <section className="relative z-10 flex gap-2">
      <MapDataSelection currentDataId={conf.dataId} onUpdateSelection={onUpdateSelection} />
      <MapDataOptions currentDataId={conf.dataId} currentMode={conf.mode} />
    </section>
  )
}
