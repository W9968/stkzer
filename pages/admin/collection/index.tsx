import Head from 'next/head'
import type { NextPage } from 'next'
import AdminLayout from 'layout/Admin.layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>STKZER - Collection</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AdminLayout>
        <p>fsdf</p>
      </AdminLayout>
    </>
  )
}

export default Home
