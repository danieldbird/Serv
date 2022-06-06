import Head from 'next/head'
import React from 'react'

function Loading() {
  return (
    <>
      <Head>
        <title>Serv.</title>
        <meta name="description" content="Serv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
            role="status"
          ></div>
        </div>
      </main>
    </>
  )
}

export default Loading
