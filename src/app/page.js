import MapComponent from '@/components/MapComponent'
import MapSelectionPanel from '@/components/MapSelectionPanel'

export default function Home () {
  return (
    <main className="min-h-screen p-3 pt-16 bg-sky-200">
      <MapSelectionPanel />
      <MapComponent className="absolute top-0 left-0 w-full h-screen" />
    </main>
  )
}
