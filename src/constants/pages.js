import { BarChartIcon, MapIcon, QuestionMarkIcon } from '@/components/icons'

export const PAGES = {
  map: {
    route: '/',
    text: 'Map',
    icon: <MapIcon size={22} />
  },
  statistics: {
    route: '/statistics',
    text: 'Statistics',
    icon: <BarChartIcon size={22} />
  },
  about: {
    route: '/about',
    text: 'About',
    icon: <QuestionMarkIcon size={22} />
  }
}
