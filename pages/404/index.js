import Head from 'next/head'
import React from 'react'

function NotFound() {
  return (
    <>
      <Head>
        <title>Serv. - Not Found</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Not Found</h2>
      </main>
    </>
  )
}

export default NotFound
