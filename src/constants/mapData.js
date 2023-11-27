import { AirlineIcon, MaskIcon, WarningIcon } from '@/components/icons'
import { clusteredPointLayer, clusterCountLayer, unclusteredPointLayer, heatmapLayer } from './mapLayers'

export const DATA = {
  alarms: {
    id: 1,
    text: 'Risk Levels',
    icon: <WarningIcon size={20} />
  },
  outbreaks: {
    id: 2,
    text: 'Outbreaks',
    icon: <MaskIcon size={24} />
  },
  migrations: {
    id: 3,
    text: 'Risk Routes',
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
    text: 'Risk Levels',
    icon: <WarningIcon size={20} />,
    source: '/data/alertas.geojson',
    renderModes: {
      cluster: {
        layers: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
        props: {
          cluster: true, clusterMaxZoom: 14, clusterRadius: 30
        }
      },
      heatMap: {
        layers: [heatmapLayer],
        props: {

        }
      }
    }
  },
  [DATA_ID.outbreaks]: {
    text: 'Outbreaks',
    icon: <MaskIcon size={24} />,
    source: '/data/brotes.geojson',
    renderModes: {
      cluster: {
        layers: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
        props: {
          cluster: true, clusterMaxZoom: 14, clusterRadius: 30
        }
      },
      heatMap: {
        layers: [heatmapLayer],
        props: {

        }
      }
    }
  },
  [DATA_ID.migrations]: {
    text: 'Risk Routes',
    icon: <AirlineIcon size={20} />,
    source: '/data/migrations.geojson',
    renderModes: {
      cluster: {
        layers: [clusteredPointLayer, clusterCountLayer, unclusteredPointLayer],
        props: {
          cluster: true, clusterMaxZoom: 14, clusterRadius: 30
        }
      },
      heatMap: {
        layers: [heatmapLayer],
        props: {

        }
      }
    }
  }
}
