import db from '../../../utils/db'
import { getSession } from '@auth0/nextjs-auth0'
import sendgrid from '@sendgrid/mail'

export default async function handler(req, res) {
  const session = getSession(req, res)

  const { firstName, lastName, address } = req.body
  try {
    await db.query(
      `INSERT INTO users VALUES (null, '${session.user.sub}', '${firstName}', '${lastName}', '${address}')`
    )
    await db.end()
    session.user.registered = true
    delete session.refreshToken
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'danieldbird@gmail.com', // Change to your recipient
      from: 'danieldbird@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sendgrid
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  } catch (error) {
    console.log(error)
  }

  res.redirect('/dashboard')
}
