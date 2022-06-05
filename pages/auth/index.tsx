import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Button, Input, Logo } from 'components/export'
import {
  AuthCol,
  AuthContainer,
  FormContainer,
  FromHeader,
  HomeButton,
} from 'styles/auth.module'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='watch list' content='my watchlist login page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AuthContainer>
        <AuthCol>
          <Logo />
          <Link href={'/'} passHref>
            <HomeButton>home</HomeButton>
          </Link>
        </AuthCol>
        <AuthCol>
          <FormContainer>
            <FromHeader>sign in</FromHeader>
            <Input type={'email'} placeholer={'email'} />
            {/* <Input type={'password'} placeholer={'password'} /> */}
            <Button title={'send'} />
          </FormContainer>
        </AuthCol>
      </AuthContainer>
    </>
  )
}

export default Index
