import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  // TODO search riskRoutes based on outbreak date and id
  // TODO check errors
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskRoutes')
  const riskRoutes = (await collection.aggregate([
    {
      $match: { regionId: params.region, regionDate: params.date }
    },
    {
      $lookup: {
        from: 'migrationRoutes',
        localField: 'migrationRouteId',
        foreignField: 'id',
        as: 'mr'
      }
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [
            {
              $arrayElemAt: ['$mr', 0]
            },
            '$$ROOT'
          ]
        }
      }
    },
    {
      $project: { _id: 0, id: 0, mr: 0 }
    }
  ]).toArray())
  return Response.json({ data: riskRoutes })
}
