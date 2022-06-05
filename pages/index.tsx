import WrapperLayout from 'layout/Wrapper.layout'
import type { NextPage } from 'next'

import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>STKZER</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WrapperLayout>
        <p>hello</p>
      </WrapperLayout>
    </>
  )
}

export default Home
