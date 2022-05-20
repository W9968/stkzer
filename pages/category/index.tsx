import type { NextPage } from 'next'

import Head from 'next/head'

const Slug: NextPage = () => {
  return (
    <>
      <Head>
        <title style={{ textTransform: 'capitalize' }}>category</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

export default Slug
