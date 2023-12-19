'use client'
import MapComponent from '@/components/MapComponent'
import MapDataDetails from '@/components/MapDataDetails'
import MapMessage from '@/components/MapMessage'
import MapSelectionPanel from '@/components/MapSelectionPanel'
import { DATA_ID, MAP_DATA_ID } from '@/constants/mapData'

import { useEffect, useState } from 'react'
import { featureCollection } from '@turf/helpers'

export default function Home () {
  const [mapConf, setMapConf] = useState({
    dataId: DATA_ID.alarms,
    mode: 'default' // TODO constants
  })

  // TODO: correct mapData type (FeatureCollection)
  const [mapData, setMapData] = useState([{}, {}, {}])
  const [regions, setRegions] = useState()
  const [mainData, setMainData] = useState(MAP_DATA_ID.riskLevels)
  const [selectedDataInfo, setSelectedDataInfo] = useState([])
  const [loading, setLoading] = useState({ isLoading: true, msg: 'Loading Risk Levels...' })
  useEffect(() => {
    // TODO: request RiskLevels by Id
    // fetch('/data/testRiskLevels.geojson')
    //   .then(async response => {
    //     const nextMapData = [...mapData]
    //     nextMapData[MAP_DATA_ID.riskLevels] = await response.json()
    //     // console.log(nextMapData[MAP_DATA_ID.riskLevels])
    //     setMapData(nextMapData)
    //     setLoading({ ...loading, isLoading: false })
    //   })
    fetch('/api/regions')
      .then(async response => {
        const res = await response.json()
        setRegions(res.regions)
        fetch('/api/riskLevels')
          .then(async response => {
            const risks = (await response.json()).riskLevels.risks
            const featureList = res.regions.map((region) => {
              const riskLevel = risks.find((risk) =>
                risk.regionId === region.properties.regionId)
              return {
                ...region,
                properties: { ...region.properties, level: riskLevel.level }
              }
            })
            const collection = featureCollection(featureList)
            console.log(collection)
            const nextMapData = [...mapData]
            nextMapData[MAP_DATA_ID.riskLevels] = collection
            setMapData(nextMapData)
          })
      })
  }, [])
  const onUpdateSelection = (dataId) => {
    // setMapConf({ ...mapConf, dataId })
    setMainData(dataId)
    // TODO: useEffect request when mainData change
  }
  const onSelectFromMap = (evt) => {
    const feature = evt.features[0]
    if (feature) {
      console.log(feature)
      setSelectedDataInfo([{
        type: feature.layer.source, // TODO: translate to map data id
        ...feature.properties
      }])
    }
  }
  const onMapDataUpdate = (updates) => {
    const nextMapData = [...mapData]
    for (const update of updates) {
      nextMapData[update.id] = update.data
    }
    console.log(nextMapData)
    setMapData(() => nextMapData)
  }
  return (
    <main className="min-h-screen p-3 pt-16 bg-sky-200">
      <div className="relative z-30 flex items-start gap-2 w-fit mb-2">
        <MapSelectionPanel conf={mapConf} mainData={mainData} onUpdateSelection={onUpdateSelection} />
        <MapMessage show={loading.isLoading} >{loading.msg}</MapMessage>
      </div>
      <div className="relative z-10 w-full sm:max-w-sm">
        <MapDataDetails selectedDataInfo={selectedDataInfo}
          onMapDataUpdate={onMapDataUpdate} />
      </div>
      <MapComponent className="absolute top-0 left-0 w-full h-screen"
        conf={mapConf} mapData={mapData} onSelectFromMap={onSelectFromMap} />
    </main>
  )
}
