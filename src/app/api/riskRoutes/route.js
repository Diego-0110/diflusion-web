import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  const date = params.date || 1701043200000
  const region = params.region || 'SP01059'
  console.log(region)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const rrCollection = db.collection('riskRoutes')
  const riskRoutes = await rrCollection.aggregate([
    {
      $match: { date }
    },
    {
      $project: {
        riskRoutes: {
          $filter: {
            input: '$riskRoutes',
            as: 'item',
            cond: { $eq: ['$$item.regionId', region] }
          }
        }
      }
    }
  ]).toArray()
  // console.log(riskRoutes)
  return Response.json({ data: riskRoutes[0].riskRoutes })
}
