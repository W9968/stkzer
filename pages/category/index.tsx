import Category from 'components/category/Category'
import type { NextPage } from 'next'

import Head from 'next/head'

const Slug: NextPage = () => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Category />
    </>
  )
}

export default Slug
