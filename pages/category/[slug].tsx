import type { NextPage } from 'next'

import Head from 'next/head'
import { useRouter } from 'next/router'

const Slug: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title style={{ textTransform: 'capitalize' }}>{slug}</title>
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
