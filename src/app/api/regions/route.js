import clientPromise from '@/utils/lib/mongodb'

export async function GET () {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('regions')
  const regions = await collection.find({}).toArray()
  return Response.json({ data: regions })
}
