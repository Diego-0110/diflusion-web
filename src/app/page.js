'use client'
import MapComponent from '@/components/MapComponent'
import MapMessage from '@/components/MapMessage'
import MapSelectionPanel from '@/components/MapSelectionPanel'
import { DATA_ID } from '@/constants/mapData'

import { useState } from 'react'

export default function Home () {
  const [mapConf, setMapConf] = useState(DATA_ID.alarms)
  const handleSelection = (id) => {
    setMapConf(id)
  }
  return (
    <main className="min-h-screen p-3 pt-16 bg-sky-200">
      <div className="relative z-30 flex items-start gap-2">
        <MapSelectionPanel configuration={mapConf} handleSelection={handleSelection} />
        <MapMessage show={true} />
      </div>
      <MapComponent className="absolute top-0 left-0 w-full h-screen" />
    </main>
  )
}
