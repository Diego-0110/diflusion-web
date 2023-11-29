export default function Property ({ name, value, icon }) {
  return (
    <section className="flex gap-2">
      {icon}
      <div>
        <p className="text-sm font-semibold text-on-surface-variant">{name}</p>
        <p>{value}</p>
      </div>
    </section>
  )
}
