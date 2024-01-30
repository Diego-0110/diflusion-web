import clientPromise from '@/utils/lib/mongodb'

export async function GET () {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('regions')
  const regions = await (await collection.find({},
    { projection: { _id: 0 } })).toArray()
  return Response.json({ data: regions })
}
