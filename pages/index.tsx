import type { NextPage } from 'next'

import Head from 'next/head'

import { __store } from 'context/DataProvider'

const Home: NextPage = () => {
  const { lists } = __store()
  return (
    <>
      <Head>
        <title>Watchlist</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

export default Home
