import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const migrationIds = searchParams.get('ids')?.split(',').map(id => parseInt(id)) ||
    [519, 536, 732, 1037]
  const region = searchParams.get('region') || 'SP01059'
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('migrationRoutes')
  console.log(region)
  console.log(migrationIds)
  const migRoutes = await collection.aggregate([
    {
      $match: { regionId: region }
    },
    {
      $project: {
        migrationRoutes: {
          $filter: {
            input: '$migrationRoutes',
            as: 'item',
            cond: { $in: ['$$item.properties.id', [...migrationIds]] }
          }
        }
      }
    }
  ]).toArray()
  console.log(migRoutes)
  return Response.json({ migrationRoutes: migRoutes[0].migrationRoutes })
}
