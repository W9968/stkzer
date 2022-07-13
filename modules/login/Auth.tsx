import { FC } from 'react'

import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'
import {
  StyledAuthButton,
  StyledAuthContainer,
  StyledAuthWrapper,
} from 'theme/auth.element'

import Logo from 'modules/logo/Logo'
import { useRouter } from 'next/router'
import { __auth } from 'context/AuthProvider'
import Link from 'next/link'
import { Anchor } from 'theme/header.element'

const Auth: FC = function () {
  const { push } = useRouter()
  const { login, currentUser } = __auth()

  if (currentUser.user_id) {
    push('/')
  }

  return (
    <StyledAuthWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Logo />
        <Link href={'/'} passHref>
          <Anchor>home</Anchor>
        </Link>
      </div>
      <StyledAuthContainer>
        <p>
          If your providers have similar emails, it will not create a newer
          account.
        </p>
        <div style={{ width: '100%', marginTop: 14 }}>
          <StyledAuthButton onClick={() => login('google')}>
            <AiOutlineGoogle size={21} />
            <p>login with google</p>
          </StyledAuthButton>
          <StyledAuthButton onClick={() => login('github')}>
            <AiOutlineGithub size={21} />
            <p>login with gituhb</p>
          </StyledAuthButton>
        </div>
      </StyledAuthContainer>
    </StyledAuthWrapper>
  )
}

export default Auth
