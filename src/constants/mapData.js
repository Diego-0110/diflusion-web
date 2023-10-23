import { AirlineIcon, MaskIcon, WarningIcon } from '@/components/icons'
import { clusteredPointLayer, clusterCountLayer, unclusteredPointLayer, heatmapLayer } from './mapLayers'

export const DATA = {
  alarms: {
    id: 1,
    text: 'Alarms',
    icon: <WarningIcon size={20} />
  },
  outbreaks: {
    id: 2,
    text: 'Outbreaks',
    icon: <MaskIcon size={24} />
  },
  migrations: {
    id: 3,
    text: 'Migrations',
    icon: <AirlineIcon size={20} />
  }
}

export const DATA_ID = {
  alarms: 'alarms',
  outbreaks: 'outbreaks',
  migrations: 'migrations'
}

export const DATA_MAP = {
  [DATA_ID.alarms]: {
    text: 'Alarms',
    icon: <WarningIcon size={20} />,
    source: '',
    renderModes: {
      cluster: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
      heatMap: [heatmapLayer]
    }
  },
  [DATA_ID.outbreaks]: {
    text: 'Outbreaks',
    icon: <MaskIcon size={24} />,
    source: '',
    renderModes: {
      cluster: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
      heatMap: [heatmapLayer]
    }
  },
  [DATA_ID.migrations]: {
    text: 'Migrations',
    icon: <AirlineIcon size={20} />,
    source: '',
    renderModes: {
      cluster: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
      heatMap: [heatmapLayer]
    }
  }
}
