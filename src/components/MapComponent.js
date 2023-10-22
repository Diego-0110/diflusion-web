'use client'
import {
  Map, NavigationControl, Marker,
  ScaleControl, Source, Layer
} from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { dataLayer, clusterCountLayer, unclusteredPointLayer, heatmapLayer } from '@/constants/mapLayers'

import dataGeoJSON from '@/data/alertas.json'

export default function MapComponent ({ ...props }) {
  return (
    <div {...props}>
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 2
        }}
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        maplibreLogo
      >
        <NavigationControl position="top-right" />
        <ScaleControl />
        {/* <Source id="alarms" type="geojson" data={dataGeoJSON} generateId
          cluster={true} clusterMaxZoom={14} clusterRadius={30}>
          <Layer {...dataLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source> */}
        {/* HeatMap */}
        <Source id="alarms" type="geojson" data={dataGeoJSON} generateId>
          <Layer {...heatmapLayer} />
        </Source>
      </Map>
    </div>
  )
}
