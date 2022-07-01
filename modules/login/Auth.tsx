import { FC } from 'react'
import { BiX } from 'react-icons/bi'
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'
import {
  StyledAuthButton,
  StyledAuthContainer,
  StyledAuthWrapper,
} from 'theme/auth.element'

import Logo from 'modules/logo/Logo'
import { __auth } from 'context/AuthProvider'

const Auth: FC<ComponentProp> = function ({ func }) {
  const { login } = __auth()

  return (
    <StyledAuthWrapper
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'tween' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Logo />
        <BiX
          size={24}
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={func}
        />
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

type ComponentProp = {
  func: () => void
}

export default Auth
