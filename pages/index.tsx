import type { NextPage } from 'next'

import Head from 'next/head'
import { Grid } from 'components/export'

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

      {[...Array(5)].map((_, index: number) => {
        return (
          <Grid
            title={'wale'}
            summary={
              'this is a test drive sdfsd qsdfjkhs lhsdflk sdfs qfze zeftg  ertyge  azerz aze rz ezr zer  '
            }
            image={
              'https://i.pinimg.com/originals/fb/2c/b2/fb2cb222a32959e7f0342ec875d90f87.jpg'
            }
            key={index}
          />
        )
      })}
    </>
  )
}

export default Home
