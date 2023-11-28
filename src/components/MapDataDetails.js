export default function MapDataDetails ({ selectedDataInfo }) {
  if (selectedDataInfo.length < 1) {
    return null
  }
  const info = selectedDataInfo[selectedDataInfo.length - 1]
  return (
    <article className="bg-surface rounded-xl max-w-sm p-3">
      <header>
        <div className="flex justify-center gap-10">
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary">
            <span className="text-xl text-on-primary">{info.level}</span>
          </div>
          <div className="h-20 w-20 rounded-md bg-primary"></div>
        </div>
        <h1 className="text-xl font-bold">{info.regionName}</h1>
        <span className="px-2 rounded-full text-sm text-on-primary bg-primary">#{info.regionId}</span>
      </header>
      <section>
        <p className="break-words">
          {JSON.stringify(selectedDataInfo[selectedDataInfo.length - 1])}
        </p>
      </section>
    </article>
  )
}
