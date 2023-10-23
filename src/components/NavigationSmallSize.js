import Link from 'next/link'
import { RightArrowIcon } from './icons'
import useToggle from '@/utils/hooks/useToggle'

export default function NavigationSmallSize ({ currentPage, pages }) {
  const {
    isToggled: isHidden,
    handleClick
  } = useToggle(true)
  return (
    <div className="flex flex-col items-center gap-6 p-2 bg-surface rounded-[1.375em] w-fit">
      <div className="flex gap-6">
        <Link className="flex items-center self-start gap-2" href="/">
          <span className="w-7 h-7 bg-violet-500 rounded-full"></span>
          <span className="font-museo-moderno text-xl font-bold">DiFLUsion</span>
        </Link>
        <button onClick={handleClick}>
          {isHidden
            ? <RightArrowIcon className="rotate-90" size={22} />
            : <RightArrowIcon className="-rotate-90" size={22} />
          }
        </button>
      </div>
      {!isHidden &&
      <ul className="flex max-sm:flex-col items-center gap-6 px-5 text-lg font-medium text-on-surface-variant">
        {pages.map(({ route, text, icon }) => {
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
      </ul>}
    </div>
  )
}
