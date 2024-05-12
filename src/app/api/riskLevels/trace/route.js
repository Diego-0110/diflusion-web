import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  // TODO try catch error
  const params = parseUrlWithParams(search)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskRoutes')
  const tracedRiskRoute = await (await collection.aggregate([
    {
      $match: {
        regionId: params.regionId,
        fromDate: params.fromDate,
        toDate: params.toDate
      }
    },
    {
      $lookup: {
        from: 'migrations',
        localField: 'migrationId',
        foreignField: '_id',
        as: 'migration'
      }
    },
    { $unwind: { path: '$migration' } },
    {
      $lookup: {
        from: 'outbreaks',
        localField: 'outbreakIds',
        foreignField: '_id',
        as: 'outbreaks'
      }
    }
  ])).toArray()
  return Response.json({ data: tracedRiskRoute })
}
