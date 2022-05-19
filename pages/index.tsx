import type { NextPage } from 'next'

import Head from 'next/head'
import { __s } from 'hooks/useSupa'

const Home: NextPage = () => {
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
      <p>hello</p>
    </>
  )
}

export default Home
