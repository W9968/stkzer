import { FC } from 'react'
import Logo from 'modules/logo/Logo'
import { __auth } from 'context/AuthProvider'
import Profile from 'modules/button/Profile'
import { Anchor, StyledHeader } from 'theme/header.element'

const Header: FC = function () {
  const { isLoaggedIn, login, logout, currentUser } = __auth()

  console.log(currentUser)

  return (
    <StyledHeader>
      <Logo />
      <div>
        {isLoaggedIn ? (
          <Profile />
        ) : (
          // <Link href={'/auth'} passHref>
          <Anchor onClick={() => login('github')}>sign in</Anchor>
          // </Link>
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
