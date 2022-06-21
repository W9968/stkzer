import Head from 'next/head'
import { NextApiRequest } from 'next'
import type { NextPage } from 'next'
import { __auth } from 'context/AuthContext'

import WrapperLayout from 'layout/Wrapper.layout'
import { Button, Input } from 'components/export'

import { useRouter } from 'next/router'
import { ChangeEvent, useLayoutEffect, useState } from 'react'
import { FromHeader, FormContainer, FormParag } from 'styles/auth.module'

const Index: NextPage = () => {
  const router = useRouter()
  const { signIn, currentUser } = __auth()
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  })

  let handleFormChange = function (
    binding: string,
    event: ChangeEvent<HTMLInputElement>
  ) {
    setForm({ ...form, [binding]: event.target.value })
  }

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
            value={form.email}
            placeholer={'email'}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFormChange('email', e)
            }
          />
          <Input
            type={'email'}
            value={form.password}
            placeholer={'email'}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFormChange('password', e)
            }
          />
          <Button
            title={'get link'}
            onClick={() => signIn(form.email, form.password)}
          />
        </FormContainer>
      </WrapperLayout>
    </>
  )
}

export default Index
