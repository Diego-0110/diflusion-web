'use client'
import MapSelectionPanel from '@/components/MapSelectionPanel'

import {
  Map, NavigationControl, Marker,
  ScaleControl, Source, Layer
} from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function Home () {
  return (
    <main className="min-h-screen p-3 pt-16 bg-sky-200">
      <MapSelectionPanel />
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{ width: '100%', height: '100vh', backgroundColor: 'rgb(186 230 253)', position: 'absolute', left: 0, top: 0, zIndex: 1 }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key"
      >
        <NavigationControl position="top-right" />
        <ScaleControl />
      </Map>
    </main>
  )
}
