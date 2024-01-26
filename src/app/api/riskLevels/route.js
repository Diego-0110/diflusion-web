import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  params.date = params.date || 1701043200000
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskLevels')
  const riskLevels = (await collection.findOne({ date: params.date })).risks
  return Response.json({ data: riskLevels })
}
