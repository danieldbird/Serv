import Head from 'next/head'
import React from 'react'

function Quotes() {
  return (
    <>
      <Head>
        <title>Serv. - Quotes</title>
        <meta name="description" content="Quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Quotes</h2>
      </main>
    </>
  )
}

export default Quotes
