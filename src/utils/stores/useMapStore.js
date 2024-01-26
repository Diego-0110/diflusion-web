import { create } from 'zustand'
import { MAP_DATA_ID } from '@/constants/mapData'
import getRiskLevels from '../data/getRiskLevels'
import getOutbreaks from '../data/getOutbreaks'
import traceRiskLevels from '../data/traceRiskLevel'
import traceOutbreaks from '../data/traceOutbreaks'

export const useMapStore = create((set, get) => ({
  showedData: [{}, {}, {}],
  mapMode: MAP_DATA_ID.riskLevels,
  date: [],
  selectedDataInfo: [],
  traceInfo: null,
  setSelectedDataInfo: ({ dataId, info }) => {
    // set selectedDataInfo
    // reset o add based on traceInfo (splice)
    if (get().traceInfo) {
      set((state) => ({
        selectedDataInfo: state.selectedDataInfo.splice(1, 1,
          { type: dataId, info })
      }))
    }
    set(() => ({
      selectedDataInfo: [{ type: dataId, info }]
    }))
    // set open MapDataDetails
  },
  setMapMode: (modeId) => {
    set(() => ({ mapMode: modeId }))
    get().updateMap({ modeId, date: get().date })
  },
  setDate: (date) => {
    set(() => ({ date }))
    get().updateMap({ modeId: get().modeId, date })
  },
  setPreviousSelectedDataInfo: () => {
    // set selectedDataInfo pop
    set((state) => ({ selectedDataInfo: state.selectedDataInfo.slice(0, -1) }))
  },
  updateMap: ({ modeId, date }) => {
    // Switch base on modeId
    //    fetching using TanStack Query
    //      fetch regions y riskLevels
    //      fetch outbreaks
    // set showedData
    const newShowedData = [{}, {}, {}]
    switch (modeId) {
      case MAP_DATA_ID.riskLevels:
        newShowedData[modeId] = getRiskLevels({ date })
        break
      case MAP_DATA_ID.outbreaks:
        newShowedData[modeId] = getOutbreaks({ date })
        break
      default:
        break
    }
    set(() => ({ showedData: newShowedData }))
  },
  traceSelectedData: ({ dataType, dataId, date }) => {
    // There's no need to pass modeId value, it can be got trough selectedDataInfo
    // set selectedDataInfo (reset)
    // Switch base on modeId in selectedDataInfo
    //    fetching using TanStack Query
    //      fetch riskRoutes -> migrationRoutes -> outbreaks
    //      fetch riskRoutes -> migrationRoutes -> riskLevels
    let newTraceInfo
    // reset array
    set((state) => ({ selectedDataInfo: state.selectedDataInfo.slice(-1) }))
    switch (dataType) {
      case MAP_DATA_ID.riskLevels:
        newTraceInfo = traceRiskLevels({ dataId, date })
        break
      case MAP_DATA_ID.outbreaks:
        newTraceInfo = traceOutbreaks({ dataId, date })
        break
      default:
        break
    }
    set(() => ({ traceInfo: newTraceInfo }))
  }
}))
