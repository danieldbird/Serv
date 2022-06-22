import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import Loading from '../components/Loading'

const Home = () => {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>
  // console.log(user)
  return (
    <>
      <Head>
        <title>Serv.</title>
        <meta name="description" content="Serv." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <main className="container mx-auto py-6 px-10 bg-gray-100">
          <Image src={user.picture} alt={user.name} width="70" height="70" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.registered ? 'True' : 'False'}</p>
        </main>
      ) : (
        <main className="container mx-auto py-6 px-10 bg-gray-100">Main</main>
      )}
    </>
  )
}

export default Home
