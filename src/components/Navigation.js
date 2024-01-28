'use client'
import { PAGES } from '@/constants/pages'

import NavigationLargeSize from './NavigationLargeSize'
import NavigationSmallSize from './NavigationSmallSize'
import { usePathname } from 'next/navigation'

export default function Navigation () {
  const currentPage = usePathname()
  const pages = Object.values(PAGES)
  return (
    <nav>
      <div className="max-sm:hidden">
        <NavigationLargeSize currentPage={currentPage} pages={pages} />
      </div>
      <div className="sm:hidden">
        <NavigationSmallSize currentPage={currentPage} pages={pages} />
      </div>
    </nav>
  )
}
