import React, { useState } from 'react'
import Head from 'next/head'
import PlacesAutocomplete from '../../components/PlacesAutocomplete'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Add({ user }) {
  const [address, setAddress] = useState()
  return (
    <>
      <Head>
        <title>Add Job - Serv</title>
        <meta name="description" content="Add Job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Add Job</h2>
        <form action="/api/jobs/createJob" method="post">
          <input type="hidden" name="user_id" defaultValue={user.id} />
          <input type="hidden" name="lat" defaultValue={address?.geometry.location.lat()} />
          <input type="hidden" name="lng" defaultValue={address?.geometry.location.lng()} />
          <div className="input-group">
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
              name="summary"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Job summary.."
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="description"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Job description.."
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="images"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Images"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="accessibility"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Accessibility.."
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="frequency"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Frequency.."
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="category"
              className="w-1/2 py-2 px-4 rounded my-2"
              placeholder="Category.."
              required
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 rounded text-white">Add Job</button>
        </form>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res)
    return {
      props: { user: session },
    }
  },
})
