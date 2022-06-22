import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { fetchAllJobsByUserId } from '../../utils/api'
export default function Jobs({ jobs }) {
  return (
    <>
      <Head>
        <title>Jobs - Serv</title>
        <meta name="description" content="Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Jobs</h2>
        <div className="block sm:flex">
          {jobs.map((job) => {
            return (
              <div className="bg-slate-200 rounded my-4 sm:mx-2 w-full" key={job.id}>
                <div>{job.description}</div>
                {/* <Image src={job.images} alt="" width="100" height="100" /> */}
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res)
    const jobs = await fetchAllJobsByUserId(session.user.id)
    return {
      props: { jobs },
    }
  },
})
