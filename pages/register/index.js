import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
// import { AutoComplete } from '../../components/AutoComplete'

export default function Register({ user }) {
  return (
    <>
      <Head>
        <title>Register - Serv</title>
        <meta name="description" content="Registration form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Registration</h2>
        <form action="/api/users/register" method="post">
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={user.given_name}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={user.family_name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Used to show jobs nearest to you.</label>
            <input type="text" name="address" placeholder="Address" />
            {/* <AutoComplete /> */}
          </div>
          <div className="input-group">
            <button className="bg-blue-500 p-2 rounded text-white my-4">Register</button>
          </div>
        </form>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res)
    if (session.user.registered) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }
    return {
      props: { user: session },
    }
  },
})
