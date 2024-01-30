import { create } from 'zustand'
import { MAP_DATA_ID } from '@/constants/mapData'
import getRiskLevels from '../data/getRiskLevels'
import getOutbreaks from '../data/getOutbreaks'
import traceRiskLevels from '../data/traceRiskLevel'
import traceOutbreaks from '../data/traceOutbreaks'
import { featureCollection } from '@turf/helpers'
import toast from 'react-hot-toast'

const initialState = {
  showedData: [featureCollection([]), featureCollection([]), featureCollection([])],
  mapMode: MAP_DATA_ID.riskLevels,
  date: 1704672000000,
  // TODO selected dates and current date
  selectedDataInfo: [],
  traceInfo: null
}

export const useMapStore = create((set, get) => ({
  ...initialState,
  setSelectedDataInfo: ({ dataId, info }) => {
    // set selectedDataInfo
    // reset o add based on traceInfo (splice)
    // TODO clean showedData
    const currSelectedDataId = get().selectedDataInfo.slice(-1)[0]?.dataId
    if (currSelectedDataId !== undefined && get().traceInfo &&
      currSelectedDataId !== dataId) {
      set((state) => ({
        selectedDataInfo: state.selectedDataInfo.splice(1, 1,
          { type: dataId, info })
      }))
    } else {
      set(() => ({
        selectedDataInfo: [{ type: dataId, info }]
      }))
    }
    // set open MapDataDetails
  },
  setMapMode: (modeId) => {
    set(() => ({ mapMode: modeId }))
    get().loadMap({ modeId })
  },
  setDate: (date) => {
    set(() => ({ date }))
    get().loadMap({ date })
  },
  setPreviousSelectedDataInfo: () => {
    // set selectedDataInfo pop
    set((state) => ({ selectedDataInfo: state.selectedDataInfo.slice(0, -1) }))
  },
  loadMap: async ({ modeId = get().mapMode, date = get().date }) => {
    // TODO date not null
    // TODO abort fetch
    // Switch base on modeId
    //    fetching using TanStack Query
    //      fetch regions y riskLevels
    //      fetch outbreaks
    // set showedData
    const newShowedData = [...initialState.showedData]
    let promise
    switch (modeId) {
      case MAP_DATA_ID.riskLevels:
        promise = getRiskLevels({ date })
        toast.promise(promise, {
          loading: 'Loading',
          success: 'Got the data',
          error: 'Error when fetching'
        })
        newShowedData[modeId] = await promise
        break
      case MAP_DATA_ID.outbreaks:
        promise = getOutbreaks({ date })
        toast.promise(promise, {
          loading: 'Loading',
          success: 'Got the data',
          error: 'Error when fetching'
        })
        newShowedData[modeId] = await promise
        break
      default:
        break
    }
    set(() => ({
      showedData: newShowedData,
      selectedDataInfo: initialState.selectedDataInfo,
      traceInfo: initialState.traceInfo
    }))
  },
  updateMap: (updates) => {
    set((state) => {
      const nextShowedData = [...state.showedData]
      for (const update of updates) {
        nextShowedData[update.id] = update.data
      }
      return {
        showedData: nextShowedData
      }
    })
  },
  traceSelectedData: async () => {
    // There's no need to pass modeId value, it can be got trough selectedDataInfo
    // set selectedDataInfo (reset)
    // Switch base on modeId in selectedDataInfo
    //    fetching using TanStack Query
    //      fetch riskRoutes -> migrationRoutes -> outbreaks
    //      fetch riskRoutes -> migrationRoutes -> riskLevels
    if (get().selectedDataInfo.length < 1) {
      return
    }
    const data = get().selectedDataInfo.slice(-1)[0]
    let newTraceInfo
    switch (data.type) {
      case MAP_DATA_ID.riskLevels:
        newTraceInfo = await traceRiskLevels({
          regionId: data.info.id,
          date: data.info.date
        })
        get().updateMap([
          {
            id: MAP_DATA_ID.outbreaks,
            data: newTraceInfo.outbreaks
          },
          {
            id: MAP_DATA_ID.riskRoutes,
            data: newTraceInfo.riskRoutes
          }
        ])
        break
      case MAP_DATA_ID.outbreaks:
        newTraceInfo = traceOutbreaks({ outbreakId: data.info.id })
        break
      default:
        break
    }
    // reset array
    set((state) => ({ selectedDataInfo: state.selectedDataInfo.slice(-1) }))
    set(() => ({ traceInfo: newTraceInfo }))
  }
}))
