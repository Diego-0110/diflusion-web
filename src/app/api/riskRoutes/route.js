import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date') || 1701043200000
  const region = searchParams.get('region') || 'SP01059'
  console.log(region)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskRoutes')
  const riskRoutes = await collection.aggregate([
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
  return Response.json({ riskRoutes: riskRoutes[0].riskRoutes })
}
