import Head from 'next/head'
import type { NextPage } from 'next'

import WrapperLayout from 'layout/Wrapper.layout'
import { Button, Input } from 'components/export'

import { FromHeader, FormContainer, FormParag } from 'styles/auth.module'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>STKZER - Sign In</title>
        <meta name='watch list' content='my watchlist login page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WrapperLayout>
        <FormContainer
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}>
          <FromHeader>sign in</FromHeader>
          <FormParag>
            you will recieve an invite link once you send your email.
          </FormParag>
          <Input type={'email'} placeholer={'email'} />
          <Button title={'get link'} />
        </FormContainer>
      </WrapperLayout>
    </>
  )
}

export default Index
