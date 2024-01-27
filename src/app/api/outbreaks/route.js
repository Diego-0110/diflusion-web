import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('outbreaks')
  if (!params.ids) {
    // TODO date not null
    params.date = 1700179200000
    return Response.json({
      data: (await collection.findOne({ date: params.date })).outbreaks
    })
  }
  params.ids = params.ids || [
    { date: 1700697600000, id: 288775 },
    { date: 1700697600000, id: 285191 },
    { date: 1700697600000, id: 285239 },
    { date: 1700697600000, id: 288775 }
  ]
  const outbreaks = await collection.aggregate([
    {
      $match: { date: { $in: params.ids.map(id => id.date) } }
    },
    {
      $project: {
        // TODO clean of unnecesary data
        date: 1,
        outbreaks: {
          $filter: {
            input: '$outbreaks',
            as: 'item',
            cond: { $in: ['$$item.properties.id', params.ids.map(id => id.id)] }
          }
        }
      }
    }
  ]).toArray()
  return Response.json({ data: outbreaks })
}
