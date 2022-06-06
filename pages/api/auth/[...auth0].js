import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0'
import { getUserById } from '../../../utils/api'

const afterCallback = async (req, res, session, state) => {
  const registered = await getUserById(session.user.sub)
  session.user.registered = registered.length ? true : false
  session.user.data = registered.length ? registered[0] : {}
  delete session.refreshToken
  return session
}

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        returnTo: '/dashboard',
      })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  },
})
