'use client'
import { PAGES } from '@/constants/pages'

import NavigationLargeSize from './NavigationLargeSize'
import NavigationSmallSize from './NavigationSmallSize'

export default function Navigation ({ currentPage = '/' }) {
  return (
    <nav>
      <div className="max-sm:hidden">
        <NavigationLargeSize currentPage={currentPage} pages={Object.values(PAGES)} />
      </div>
      <div className="sm:hidden">
        <NavigationSmallSize currentPage={currentPage} pages={Object.values(PAGES)} />
      </div>
    </nav>
  )
}
