import MapDataOptions from './MapDataOptions'
import MapDataSelection from './MapDataSelection'
import { useMapStore } from '@/utils/stores/useMapStore'

export default function MapSelectionPanel () {
  const setDate = useMapStore((state) => state.setDate)
  const handleChange = (evt) => {
    if (evt.currentTarget.value) {
      const newDate = new Date(evt.currentTarget.value)
      const utcDate = new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(),
        newDate.getUTCDate())
      setDate(Math.floor(utcDate.getTime() / 1000))
    }
  }
  return (
    <section className="relative z-10 flex items-start gap-2">
      <MapDataSelection />
      <MapDataOptions />
      <input type="date" name="" id="" onChange={handleChange} />
    </section>
  )
}
