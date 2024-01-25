import Link from 'next/link'

export default function NavigationLargeSize ({ currentPage, pages }) {
  return (
    <div className="flex items-center gap-9 w-fit h-12 px-6 bg-surface rounded-br-xl border-r border-b border-outline shadow-md">
      <Link className="flex items-center gap-2" href="/">
        <span className="w-7 h-7 bg-primary rounded-full"></span>
        <span className="font-museo-moderno text-lg font-bold">DiFLUsion</span>
      </Link>
      <ul className="flex max-sm:flex-col items-center gap-6 h-full text-base font-semibold text-on-surface-variant">
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
      </ul>
    </div>
  )
}
