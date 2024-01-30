import parseUrlWithParams from '@/utils/data/parseUrlWithParams'
import clientPromise from '@/utils/lib/mongodb'

export async function GET (request) {
  const { search } = new URL(request.url)
  const params = parseUrlWithParams(search)
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('outbreaks')
  // TODO check params
  if (!params.ids) {
    return Response.json({
      data: await (await collection.find({ date: params.date },
        { projection: { _id: 0 } })).toArray()
    })
  }

  const outbreaks = await (await collection.find({ id: { $in: params.ids } },
    { projection: { _id: 0 } })).toArray()
  return Response.json({ data: outbreaks })
}
