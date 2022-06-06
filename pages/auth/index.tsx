import Head from 'next/head'
import { NextApiRequest } from 'next'
import type { NextPage } from 'next'
import { __auth } from 'context/AuthContext'

import WrapperLayout from 'layout/Wrapper.layout'
import { Button, Input } from 'components/export'

import { supabase } from 'hooks/useSupa'
import { ChangeEvent, useLayoutEffect, useState } from 'react'
import { FromHeader, FormContainer, FormParag } from 'styles/auth.module'
import { useRouter } from 'next/router'

const Index: NextPage = () => {
  const router = useRouter()
  const { signIn, currentUser } = __auth()
  const [email, setEmail] = useState<string>('')

  useLayoutEffect(() => {
    if (
      currentUser.user_email !== undefined &&
      currentUser.user_id !== undefined
    ) {
      router.replace('/admin')
    }
  })

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
          <Input
            type={'email'}
            value={email}
            placeholer={'email'}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Button title={'get link'} onClick={() => signIn(email)} />
        </FormContainer>
      </WrapperLayout>
    </>
  )
}

export default Index
