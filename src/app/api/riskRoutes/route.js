import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

async function getMigrationRoutesFrom (db, riskRoutes) {
  if (riskRoutes.length === 0) {
    return riskRoutes
  }
  const collection = db.collection('migrationRoutes')
  const migRoutes = (await collection.aggregate([
    {
      $match: { regionId: { $in: riskRoutes.map((k) => k.regionId) } }
    },
    {
      $project: {
        migrationRoutes: {
          $filter: {
            input: '$migrationRoutes',
            as: 'item',
            cond: { $in: ['$$item.properties.id', riskRoutes.map((k) => k.migrationId)] }
          }
        }
      }
    }
  ]).toArray())[0].migrationRoutes
  return migRoutes
}

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  const date = params.date || 1701043200000
  const region = params.region || 'SP01059'
  // TODO search riskRoutes based on outbreak date and id
  console.log(region)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const rrCollection = db.collection('riskRoutes')
  const riskRoutes = (await rrCollection.aggregate([
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
  ]).toArray())[0].riskRoutes
  console.log('riskRoutes')
  console.log(riskRoutes)
  const migRoutes = await getMigrationRoutesFrom(db, riskRoutes)
  console.log(migRoutes)
  const riskRoutesFeatures = migRoutes.map(migRoute => {
    const riskRoute = riskRoutes.find(riskRoute =>
      riskRoute.migrationId === migRoute.properties.id)
    return {
      ...migRoute,
      properties: {
        ...migRoute.properties,
        ...riskRoute
      }
    }
  })
  return Response.json({ data: riskRoutesFeatures })
}
