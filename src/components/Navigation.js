import Link from 'next/link'
import { BarChartIcon, MapIcon, QuestionMarkIcon, RightArrowIcon } from './icons'

const PAGES = {
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

export default function Navigation ({ currentPage = '/' }) {
  return (
    <nav className="flex max-sm:flex-col items-center gap-6 p-2 bg-surface rounded-full max-sm:rounded-3xl w-fit">
      <div className="flex gap-6">
        <Link className="flex items-center self-start gap-2" href="/">
          <span className="w-7 h-7 bg-violet-500 rounded-full"></span>
          <span className="font-museo-moderno text-xl font-bold">DiFLUsion</span>
        </Link>
        <button className="sm:hidden">
          <RightArrowIcon size={24} />
        </button>
      </div>
      <ul className="flex max-sm:flex-col items-center gap-6 px-5 text-lg font-medium text-on-surface-variant">
        {Object.values(PAGES).map(({ route, text, icon }) => {
          if (route === currentPage) {
            return (
              <li className="relative text-on-surface" key={route}>
                <Link className="flex gap-2 px-1 after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-current"
                  href={route}>
                  {icon}{text}
                </Link>
              </li>
            )
          }
          return (
            <li className="hover:text-on-surface" key={route}>
              <Link className="flex gap-2 px-1" href={route}>
                {icon}{text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
