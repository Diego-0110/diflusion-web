'use client'
import MapComponent from '@/components/MapComponent'
import MapMessage from '@/components/MapMessage'
import MapSelectionPanel from '@/components/MapSelectionPanel'
import { DATA_ID } from '@/constants/mapData'

import { useState } from 'react'

export default function Home () {
  const [mapConf, setMapConf] = useState({
    dataId: DATA_ID.alarms,
    mode: 'default' // TODO constants
  })
  const onUpdateSelection = (dataId) => {
    setMapConf({ ...mapConf, dataId })
  }
  return (
    <main className="min-h-screen p-3 pt-16 bg-sky-200">
      <div className="relative z-30 flex items-start gap-2">
        <MapSelectionPanel conf={mapConf} onUpdateSelection={onUpdateSelection} />
        <MapMessage show={true} />
      </div>
      <MapComponent className="absolute top-0 left-0 w-full h-screen"
        conf={mapConf} />
    </main>
  )
}
