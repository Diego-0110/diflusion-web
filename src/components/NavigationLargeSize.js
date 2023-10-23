import Link from 'next/link'

export default function NavigationLargeSize ({ currentPage, pages }) {
  return (
    <div className="flex items-center gap-6 p-2 bg-surface rounded-full w-fit">
      <Link className="flex items-center self-start gap-2" href="/">
        <span className="w-7 h-7 bg-violet-500 rounded-full"></span>
        <span className="font-museo-moderno text-xl font-bold">DiFLUsion</span>
      </Link>
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
      </ul>
    </div>
  )
}
