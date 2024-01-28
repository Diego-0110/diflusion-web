'use client'
import MapComponent from '@/components/MapComponent'
import MapDataDetails from '@/components/MapDataDetails'
import MapSelectionPanel from '@/components/MapSelectionPanel'

import { useEffect } from 'react'
import { useMapStore } from '@/utils/stores/useMapStore'
import { Toaster } from 'react-hot-toast'

export default function Home () {
  // TODO: change to Zustand
  const showedData = useMapStore((state) => state.showedData)
  const loadMap = useMapStore((state) => state.loadMap)
  useEffect(() => {
    // Load initial map state
    loadMap({})
  }, [])
  useEffect(() => {
    console.log('showedData:')
    console.log(showedData)
  }, [showedData])
  return (
    <main className="relative min-h-screen pt-12">
      <Toaster position="bottom-left" />
      <div className="relative z-30 flex items-start gap-2 w-fit mb-2">
        <MapSelectionPanel />
      </div>
      <MapDataDetails />
      <MapComponent className="absolute top-0 left-0 w-full h-screen" />
    </main>
  )
}
