import { BarChartIcon, MapIcon, QuestionMarkIcon, RightArrowIcon } from './icons'

export default function Navigation ({}) {
  return (
    <nav className="flex items-center gap-6 p-2 bg-surface rounded-full w-fit">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 bg-violet-500 rounded-full"></span>
        <span className="font-museo-moderno text-xl font-bold">DiFLUsion</span>
      </div>
      <ul className="max-md:hidden flex items-center gap-6 px-5 text-xl font-medium text-on-surface-variant">
        <li className="hover:text-on-surface text-on-surface">
          <a className="flex gap-2 px-1 py-[2px] border-b-2 border-on-surface" href="">
            <MapIcon size={24} />
            Map
          </a>
        </li>
        <li className="hover:text-on-surface">
          <a className="flex gap-2 px-1 py-[2px]" href="">
            <BarChartIcon size={24} />
            Statics
          </a>
        </li>
        <li className="hover:text-on-surface">
          <a className="flex gap-2 px-1 py-[2px]" href="">
            <QuestionMarkIcon size={24} />
            About
          </a>
        </li>
      </ul>
      <button className="md:hidden">
        <RightArrowIcon size={24} />
      </button>
    </nav>
  )
}
