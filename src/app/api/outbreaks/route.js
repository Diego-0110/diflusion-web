import clientPromise from '@/utils/lib/mongodb'

function formatIds (idsStr) {
  if (!idsStr) {
    return
  }
  const ids = idsStr.split(',')
  return ids.map(id => {
    const props = id.split(' ')
    return {
      date: parseInt(props[0]),
      id: parseInt(props[1])
    }
  })
}

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const ids = formatIds(searchParams.get('ids')) || [
    { date: 1700697600000, id: 288775 },
    { date: 1700697600000, id: 285191 },
    { date: 1700697600000, id: 285239 },
    { date: 1700697600000, id: 288775 }
  ]
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('outbreaks')
  const outbreaks = await collection.aggregate([
    {
      $match: { date: { $in: ids.map(id => id.date) } }
    },
    {
      $project: {
        date: 1,
        outbreaks: {
          $filter: {
            input: '$outbreaks',
            as: 'item',
            cond: { $in: ['$$item.properties.id', ids.map(id => id.id)] }
          }
        }
      }
    }
  ]).toArray()
  return Response.json({ outbreaks })
}
