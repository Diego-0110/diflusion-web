import Link from 'next/link'
import { RightArrowIcon } from './icons'
import useToggle from '@/utils/hooks/useToggle'

export default function NavigationSmallSize ({ currentPage, pages }) {
  const {
    isToggled: isHidden,
    handleClick
  } = useToggle(true)
  return (
    <div className="relative flex items-center justify-center gap-9 w-screen h-12 px-6 bg-surface border-b border-outline shadow-md">
      <div className="flex gap-6">
        <Link className="flex items-center gap-2" href="/">
          <span className="w-7 h-7 bg-primary rounded-full"></span>
          <span className="font-museo-moderno text-lg font-bold">DiFLUsion</span>
        </Link>
      </div>
      <button className="absolute right-4"
        onClick={handleClick}>
        {isHidden
          ? <RightArrowIcon className="rotate-90" size={22} />
          : <RightArrowIcon className="-rotate-90" size={22} />
        }
      </button>
      {!isHidden &&
      <ul className="absolute right-0 top-full flex max-sm:flex-col gap-4 px-4 py-2 rounded-bl-xl text-lg font-medium text-on-surface-variant bg-surface border-l border-b border-outline shadow-md">
        {pages.map(({ route, text, icon }) => {
          if (route === currentPage) {
            return (
              <li className="relative text-on-surface" key={route}>
                <Link className="flex gap-2 px-1"
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
