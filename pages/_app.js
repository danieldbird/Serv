import { UserProvider } from '@auth0/nextjs-auth0'
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
