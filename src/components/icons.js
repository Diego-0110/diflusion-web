// TODO: change sharp icons to rounded icons
export function MapIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="m15 21l-6-2.1l-6 2.325V5.05L9 3l6 2.1l6-2.325V18.95L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Zm2 0l3-1V5.7l-3 1.15v11.7ZM5 18.3l3-1.15V5.45l-3 1V18.3ZM16 6.85v11.7v-11.7Zm-8-1.4v11.7v-11.7Z"/>
    </svg>
  )
}

export function BarChartIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M2 21v-2h20v2H2Zm1-3v-7h3v7H3Zm5 0V6h3v12H8Zm5 0V9h3v9h-3Zm5 0V3h3v15h-3Z"/>
    </svg>
  )
}

export function QuestionMarkIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M10.6 16q0-2.025.363-2.913T12.5 11.15q1.025-.9 1.563-1.563t.537-1.512q0-1.025-.687-1.7T12 5.7q-1.275 0-1.938.775T9.126 8.05L6.55 6.95q.525-1.6 1.925-2.775T12 3q2.625 0 4.038 1.463t1.412 3.512q0 1.25-.537 2.138t-1.688 2.012Q14 13.3 13.738 13.913T13.475 16H10.6Zm1.4 6q-.825 0-1.412-.588T10 20q0-.825.588-1.413T12 18q.825 0 1.413.588T14 20q0 .825-.588 1.413T12 22Z"/>
    </svg>
  )
}

export function RightArrowIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/>
    </svg>
  )
}

export function SettingsPanoramaIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M14.25 21.95q-.475.125-.863-.162T13 21v-5q0-.5.388-.788t.887-.162q.925.25 1.85.35t1.875.1q.95 0 1.888-.1t1.862-.35q.475-.125.863.163T23 16v5q0 .5-.388.788t-.862.162q-.925-.25-1.863-.35T18 21.5q-.95 0-1.888.1t-1.862.35ZM12 12ZM9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.837q0 .25-.05.5H17.4q.05-.25.075-.5t.025-.5q-.025-.475-.075-.838t-.15-.687l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.213-.963t-1.437-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.6.625 1.35 1.05T11 17.4V22H9.25ZM11 15.35v-2.275q-.2-.2-.325-.475t-.125-.6q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .275-.088.537t-.287.463H15.4q.075-.25.113-.488T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.2.688 2.1T11 15.35Z"/>
    </svg>
  )
}

export function WarningIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M1 21L12 2l11 19H1Zm3.45-2h15.1L12 6L4.45 19ZM12 18q.425 0 .713-.288T13 17q0-.425-.288-.713T12 16q-.425 0-.713.288T11 17q0 .425.288.713T12 18Zm-1-3h2v-5h-2v5Zm1-2.5Z"/>
    </svg>
  )
}

export function MaskIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M12 18q-.95 0-1.838-.263t-1.637-.762q-1.1-.075-2.25-.475t-2.1-1.325q-.95-.925-1.562-2.425T2 9v-.5q0-1.05.725-1.775T4.5 6q.975 0 1.688.675T6.974 8.3q.7-.2 1.25-.5t1.125-.575q.575-.3 1.2-.512T12 6.5q.85 0 1.463.213t1.187.512q.55.275 1.113.575t1.262.5q.075-.975.788-1.638T19.5 6q1.05 0 1.775.725T22 8.5V9q0 2.25-.613 3.75t-1.562 2.425q-.95.925-2.1 1.325t-2.25.475q-.75.5-1.637.763T12 18Zm-5.5-3.025q-.475-.75-.738-1.637T5.5 11.5v-3q0-.425-.288-.713T4.5 7.5q-.425 0-.713.288T3.5 8.5V9q0 2.75.925 4.1T6.5 14.975ZM12 16.5q2.075 0 3.538-1.463T17 11.5V9.85q-.85-.2-1.488-.475t-1.162-.6q-.7-.425-1.237-.6T12 8q-.575 0-1.113.175t-1.237.6q-.525.3-1.163.6T7 9.85v1.65q0 2.075 1.463 3.538T12 16.5Zm-3-5.25q.55-.15.95-.363t.75-.412q.35-.2.638-.338T12 10q.375 0 .663.138t.637.337q.35.2.738.413t.962.362V10.2q-.375-.125-.65-.275l-.55-.3q-.4-.25-.813-.438T12 9q-.575 0-.988.188t-.837.437l-.55.3q-.275.15-.625.275v1.05Zm8.5 3.725q1.15-.525 2.075-1.875T20.5 9v-.5q0-.425-.288-.713T19.5 7.5q-.425 0-.713.288T18.5 8.5v3q0 .95-.25 1.838t-.75 1.637ZM12 12.25Z"/>
    </svg>
  )
}

export function AirlineIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M9 19v-2h2q-.375-3.45-2.95-5.725T2 9V7q3.225 0 5.925 1.7T12 13.3q.95-2.025 2.5-3.588T17.975 7H14V5h7v7h-2V8.7q-2.325 1.425-4 3.525T13 17h2v2H9Z"/>
    </svg>
  )
}

export function LocationIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
    </svg>
  )
}

export function CalendarIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1zm2 18H5V10h14v10zm-8-7c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1z"/>
    </svg>
  )
}

export function TraceIcon ({ size = 32, color = 'currentColor', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24" {...props}>
      <path fill={color} d="M15 20c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.73-2.58-3.07-3.47-5.17-3l.88.88a.996.996 0 1 1-1.41 1.41L4.71 13.7a.996.996 0 0 1 0-1.41L7.3 9.7a.996.996 0 1 1 1.41 1.41l-.88.89c1.51-.33 3.73.08 5.17 1.36V6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L17.3 6.3a.996.996 0 1 1-1.41 1.41L15 6.83V20z"/>
    </svg>
  )
}
