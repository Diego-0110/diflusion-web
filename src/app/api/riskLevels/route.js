import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  // TODO try catch error
  const params = parseUrlWithParams(search)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskLevels')
  const riskLevels = await (await collection.find({ date: params.date },
    { projection: { _id: 0 } })).toArray()
  return Response.json({ data: riskLevels })
}
