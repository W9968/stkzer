import Head from 'next/head'
import type { NextPage } from 'next'

import WrapperLayout from 'layout/Wrapper.layout'
import { Button, Input } from 'components/export'

import { FromHeader, FormContainer } from 'styles/auth.module'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>STKZER - Sign In</title>
        <meta name='watch list' content='my watchlist login page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WrapperLayout>
        <FormContainer>
          <FromHeader>sign in</FromHeader>
          <Input type={'email'} placeholer={'email'} />
          <Button title={'send'} />
        </FormContainer>
      </WrapperLayout>
    </>
  )
}

export default Index
