import db from '../../../utils/db'
import { mySQLDateTime } from '../../../utils/time'

export default async function handler(req, res) {
  console.log(req.body)
  const {
    user_id,
    address,
    suburb,
    city,
    postcode,
    lat,
    lng,
    summary,
    description,
    frequency,
    images,
    accessibility,
    category,
  } = req.body
  await db.query(
    `INSERT INTO jobs(id, user_id, address, suburb, city, postcode, lat, lng, summary, description, frequency, images, accessibility, category, status, created_at) VALUES (null, '${user_id}', '${address}', '${suburb}', '${city}', '${postcode}', '${lat}', '${lng}', '${summary}', '${description}', '${frequency}', '${images}',  '${accessibility}', '${category}', '1', '${mySQLDateTime(
      new Date()
    )}');`
  )
  // await db.end()
  res.status(200).json('hi')
}
