import Head from 'next/head'
import React from 'react'

function Messages() {
  return (
    <>
      <Head>
        <title>Serv. - Messages</title>
        <meta name="description" content="Messages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-6 px-10 bg-gray-100">
        <h2>Messages</h2>
      </main>
    </>
  )
}

export default Messages
