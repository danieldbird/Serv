import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from '../components/Layout'
import { UserDataProvider } from '../context/user'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <UserDataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserDataProvider>
    </UserProvider>
  )
}

export default MyApp
