'use client'
import {
  Map, NavigationControl,
  ScaleControl, Source, Layer
} from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { outbreakCircleLayer, riskLevelsFillLayer, riskLevelsLineLayer, riskRoutesLineLayer } from '@/constants/mapLayers'

import { MAP_DATA_ID, SOURCE_ID_TO_DATA_ID } from '@/constants/mapData'
import { useMapStore } from '@/utils/stores/useMapStore'
import { useEffect } from 'react'

export default function MapComponent ({ mapData, onSelectFromMap, ...props }) {
  const showedData = useMapStore((state) => state.showedData)

  const setSelectedDataInfo = useMapStore((state) => state.setSelectedDataInfo)
  const selectedDataInfo = useMapStore((state) => state.selectedDataInfo)
  const handleClick = (evt) => {
    onSelectFromMap(evt)
    const feature = evt.features[0]
    if (feature) {
      setSelectedDataInfo({
        dataId: SOURCE_ID_TO_DATA_ID[feature.layer.source], // TODO translate sourceId to dataId
        info: feature.properties
      })
    }
  }
  useEffect(() => {
    console.log('SelectedDataInfo:')
    console.log(selectedDataInfo)
  })
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
        interactiveLayerIds={[riskLevelsFillLayer.id]}
        onClick={handleClick}
      >
        <NavigationControl position="bottom-right" />
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
        <Source id="risk-levels" type="geojson" data={showedData[MAP_DATA_ID.riskLevels]}
          generateId>
            <Layer beforeId="geolines-label" {...riskLevelsFillLayer} />
            <Layer beforeId="geolines-label" {...riskLevelsLineLayer} />
        </Source>
        <Source id="outbreaks" type="geojson" data={showedData[MAP_DATA_ID.outbreaks]}
          generateId>
            <Layer beforeId="geolines-label" {...outbreakCircleLayer} />
            {/* <Layer beforeId="geolines-label" {...riskLevelsLineLayer} /> */}
        </Source>
        <Source id="risk-routes" type="geojson" data={showedData[MAP_DATA_ID.riskRoutes]}
          generateId>
            <Layer beforeId="geolines-label" {...riskRoutesLineLayer} />
            {/* <Layer beforeId="geolines-label" {...riskLevelsLineLayer} /> */}
        </Source>
        {/* <Source id="data" type="geojson" data={confValues.source}
          generateId {...confValues.renderModes.heatMap.props}>
          {confValues.renderModes.heatMap.layers.map((layer, index) => {
            return <Layer key={index} beforeId="geolines-label" {...layer} />
          })}
        </Source> */}
      </Map>
    </div>
  )
}
