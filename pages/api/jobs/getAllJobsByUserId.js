import db from '../../../utils/db'

export default async function handler(req, res) {
  const { auth0Id } = req.body
  const result = await db.query(`SELECT * FROM jobs where auth0_id = '${auth0Id}'`)
  await db.end()
  res.status(200).json(result)
}
