import { FC } from 'react'
import Logo from 'modules/logo/Logo'
import { __auth } from 'context/AuthProvider'
import Profile from 'modules/button/Profile'
import { Anchor, StyledHeader } from 'theme/header.element'

const Header: FC = function () {
  const { isLoaggedIn, login } = __auth()

  return (
    <StyledHeader>
      <Logo />
      <div>
        {isLoaggedIn ? (
          <Profile />
        ) : (
          <Anchor onClick={() => login('github')}>sign in</Anchor>
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
