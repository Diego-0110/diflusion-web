export const clusteredPointLayer = {
  id: 'alarm-points',
  type: 'circle',
  source: 'alarms',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
    'circle-stroke-color': '#555',
    'circle-stroke-width': 2
  }
}

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'alarms',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12
  }
}

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'alarms',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 10,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}

const MAX_ZOOM_LEVEL = 9

export const heatmapLayer = {
  id: 'heatmap',
  // maxzoom: MAX_ZOOM_LEVEL,
  type: 'heatmap',
  source: 'alarms',
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'Riesgo'], 0, 0, 5, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      1,
      'rgb(178,24,43)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 15]
    // Transition from heatmap to circle layer by zoom level
    // 'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
  }
}

export const riskLevelsFillLayer = {
  id: 'risk-levels-fill',
  type: 'fill',
  paint: {
    'fill-color': ['case',
      ['==', ['get', 'level'], 5], '#de1b1b',
      ['==', ['get', 'level'], 4], '#de5f1b',
      ['==', ['get', 'level'], 3], '#de8a1b',
      ['==', ['get', 'level'], 2], '#dec71b',
      ['==', ['get', 'level'], 1], '#ded41b',
      '#90de1b'],
    'fill-opacity': 0.8
  }
}

export const riskLevelsLineLayer = {
  id: 'risk-levels-line',
  type: 'line',
  paint: {
    'line-color': '#4c5254',
    'line-width': 2,
    'line-offset': 0
  }
}

export const riskRoutesLineLayer = {
  id: 'risk-route-line',
  type: 'line',
  paint: {
    'line-color': '#fff',
    'line-width': 2,
    'line-offset': 0
  }
}

export const outbreakCircleLayer = {
  id: 'outbreak-circle',
  type: 'circle',
  paint: {
    'circle-color': '#000',
    'circle-radius': 10,
    'circle-stroke-color': '#555',
    'circle-stroke-width': 2
  }
}
