import clientPromise from '@/utils/lib/mongodb'
export const dynamic = 'force-dynamic'

export async function GET () {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('regions')
  const regions = await (await collection.find({})).toArray()
  return Response.json({
    data: regions.map((region) => {
      const { _id, ...others } = region
      return { id: _id, ...others }
    })
  })
}
