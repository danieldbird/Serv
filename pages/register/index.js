import React, { useState } from 'react'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import PlacesAutocomplete from '../../components/PlacesAutocomplete'

export default function Register({ user }) {
  const [address, setAddress] = useState()
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
          <input type="hidden" name="auth0_id" defaultValue={user.sub} />
          <input type="hidden" name="lat" defaultValue={address?.geometry.location.lat()} />
          <input type="hidden" name="lng" defaultValue={address?.geometry.location.lng()} />
          <div className="input-group">
            <input
              type="text"
              name="user_name"
              placeholder="User name"
              className="w-1/2 py-2 px-4 rounded my-2"
              defaultValue={user.nickname}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-1/2 py-2 px-4 rounded my-2"
              defaultValue={user.given_name}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-1/2 py-2 px-4 rounded my-2"
              defaultValue={user.family_name}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-1/2 py-2 px-4 rounded my-2"
              defaultValue={user.email}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-1/2 py-2 px-4 rounded my-2"
              defaultValue={user.phone}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Used to show jobs nearest to you.</label>
            <PlacesAutocomplete setAddress={setAddress} />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              defaultValue={
                address
                  ? `${address?.address_components[0].long_name} ${address?.address_components[1].long_name}`
                  : ''
              }
              className="w-1/2 py-2 px-4 rounded my-2 bg-gray-200"
              placeholder="Address"
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="suburb"
              defaultValue={address?.address_components[2]?.long_name}
              className="w-1/2 py-2 px-4 rounded my-2 bg-gray-200"
              placeholder="Suburb"
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="city"
              defaultValue={address?.address_components[3]?.long_name}
              className="w-1/2 py-2 px-4 rounded my-2 bg-gray-200"
              placeholder="City"
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="postcode"
              defaultValue={address?.address_components[6]?.long_name}
              className="w-1/2 py-2 px-4 rounded my-2 bg-gray-200"
              placeholder="Postcode"
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="country"
              defaultValue={address?.address_components[5].short_name}
              className="w-1/2 py-2 px-4 rounded my-2 bg-gray-200"
              placeholder="Country"
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="user_type"
              placeholder="User Type"
              className="w-1/2 py-2 px-4 rounded my-2"
            />
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
