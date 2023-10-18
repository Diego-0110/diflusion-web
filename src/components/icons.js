export function MapIcon ({ size = 32, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24">
      <path fill={color} d="m15 21l-6-2.1l-6 2.325V5.05L9 3l6 2.1l6-2.325V18.95L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Zm2 0l3-1V5.7l-3 1.15v11.7ZM5 18.3l3-1.15V5.45l-3 1V18.3ZM16 6.85v11.7v-11.7Zm-8-1.4v11.7v-11.7Z"/>
    </svg>
  )
}

export function BarChartIcon ({ size = 32, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24">
      <path fill={color} d="M2 21v-2h20v2H2Zm1-3v-7h3v7H3Zm5 0V6h3v12H8Zm5 0V9h3v9h-3Zm5 0V3h3v15h-3Z"/>
    </svg>
  )
}

export function QuestionMarkIcon ({ size = 32, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24">
      <path fill={color} d="M10.6 16q0-2.025.363-2.913T12.5 11.15q1.025-.9 1.563-1.563t.537-1.512q0-1.025-.687-1.7T12 5.7q-1.275 0-1.938.775T9.126 8.05L6.55 6.95q.525-1.6 1.925-2.775T12 3q2.625 0 4.038 1.463t1.412 3.512q0 1.25-.537 2.138t-1.688 2.012Q14 13.3 13.738 13.913T13.475 16H10.6Zm1.4 6q-.825 0-1.412-.588T10 20q0-.825.588-1.413T12 18q.825 0 1.413.588T14 20q0 .825-.588 1.413T12 22Z"/>
    </svg>
  )
}

export function RightArrowIcon ({ size = 32, color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24">
      <path fill={color} d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/>
    </svg>
  )
}
