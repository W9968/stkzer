import { Button } from 'components/export'
import WrapperLayout from 'layout/Wrapper.layout'
import type { NextPage } from 'next'

import Head from 'next/head'
import {
  HomeContaienr,
  HomeParag,
  HomeTitle,
  HomeImageMockup,
} from 'styles/home.module'

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
        <HomeContaienr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <HomeTitle>stack what you watch</HomeTitle>
          <HomeParag>
            No need to worry about losing your watchlist, start saving with us,
            a one universal place to keep track of what you watch.
          </HomeParag>
          <Button title={'get started'} />
          <HomeImageMockup
            initial={{ opacity: 0, y: '10%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ delay: 0.2, type: 'tween' }}
            src={'/image/mockup.png'}
            alt={'mockup to show my watch list dashboard'}
          />
        </HomeContaienr>
      </WrapperLayout>
    </>
  )
}

export default Home
