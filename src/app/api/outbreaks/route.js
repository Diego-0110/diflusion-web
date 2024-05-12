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
    const nextDate = new Date(params.date * 1000)
    nextDate.setDate(nextDate.getDate() + 1)
    const nextTimeStamp = Math.floor(nextDate.getTime() / 1000)
    console.log(`Next Date: ${nextTimeStamp}`)
    return Response.json({
      data: await (await collection.find({ reportDate: { $gte: params.date, $lt: nextTimeStamp } })).toArray()
    })
  }

  const outbreaks = await (await collection.find({ id: { $in: params.ids } })).toArray()
  return Response.json({ data: outbreaks })
}
