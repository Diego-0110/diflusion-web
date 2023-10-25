'use client'
import {
  Map, NavigationControl, Marker,
  ScaleControl, Source, Layer
} from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { dataLayer, clusterCountLayer, unclusteredPointLayer, heatmapLayer } from '@/constants/mapLayers'

import { DATA_MAP } from '@/constants/mapData'

export default function MapComponent ({ conf, ...props }) {
  const confValues = DATA_MAP[conf.dataId]
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
        onLoad={(evt) => { console.log(evt.target.getStyle()) }}
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
        {/* <Source id="alarms" type="geojson" data="/data/alertas.geojson" generateId>
          <Layer {...heatmapLayer} />
        </Source> */}
        <Source id="data" type="geojson" data={confValues.source}
          generateId {...confValues.renderModes.heatMap.props}>
          {confValues.renderModes.heatMap.layers.map((layer, index) => {
            return <Layer key={index} beforeId="geolines-label" {...layer} />
          })}
        </Source>
      </Map>
    </div>
  )
}
