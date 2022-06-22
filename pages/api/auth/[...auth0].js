import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0'
import { fetchUserById } from '../../../utils/api'

const afterCallback = async (req, res, session, state) => {
  const registered = await fetchUserById(session.user.sub)
  session.user.registered = registered.length ? true : false
  session.user.id = registered.length ? registered[0].id : {}
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
