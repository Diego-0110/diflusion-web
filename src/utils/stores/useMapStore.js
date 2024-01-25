import { create } from 'zustand'
import { MAP_DATA_ID } from '@/constants/mapData'

export const useMapStore = create((set, get) => ({
  showedData: [{}, {}, {}],
  mapMode: MAP_DATA_ID.riskLevels,
  date: [],
  selectedDataInfo: [],
  traceInfo: {},
  setSelectedDataInfo: ({ dataId, info }) => {
    // set selectedDataInfo
  },
  setMapMode: (modeId) => {
    // set map mode: modeId
    set(() => ({ mapMode: modeId }))
    get().updateMap(modeId, get().date)
  },
  setPreviousSelectedDataInfo: () => {
    // set selectedDataInfo pop
  },
  updateMap: (modeId, date) => {
    // Switch base on modeId
    //    fetching using TanStack Query
    //      fetch regions y riskLevels
    //      fetch outbreaks
    // set showedData
  },
  traceSelectedData: () => {
    // set selectedDataInfo (reset)
    // Switch base on modeId in selectedDataInfo
    //    fetching using TanStack Query
    //      fetch riskRoutes -> migrationRoutes -> outbreaks
    //      fetch riskRoutes -> migrationRoutes -> riskLevels
  }
}))
