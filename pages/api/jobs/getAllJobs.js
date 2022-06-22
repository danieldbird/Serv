import db from '../../../utils/db'

export default async function handler(req, res) {
  const result = await db.query(`SELECT * FROM jobs`)
  await db.end()
  res.status(200).json(result)
}
