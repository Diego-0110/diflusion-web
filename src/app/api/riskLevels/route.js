import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date') || 1701043200000
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('riskLevels')
  const riskLevels = await collection.findOne({ date })
  return Response.json({ riskLevels })
}
