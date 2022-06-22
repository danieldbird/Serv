import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Loading from '../../components/Loading'

export default function Dashboard() {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>
  // console.log(user)
  return (
    <>
      <Head>
        <title>Dashboard - Serv</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">Dashboard</main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res)
    if (!session.user.registered) {
      return {
        redirect: {
          destination: '/register',
          permanent: false,
        },
      }
    }
    return {
      props: {},
    }
  },
})
