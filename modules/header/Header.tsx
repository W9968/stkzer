import Link from 'next/link'
import Logo from 'modules/logo/Logo'
import Profile from 'modules/button/Profile'

import { FC } from 'react'
import { __auth } from 'context/AuthProvider'
import { Anchor, StyledHeader } from 'theme/header.element'

const Header: FC = function () {
  const { isLoggedIn } = __auth()

  return (
    <StyledHeader>
      <Logo />
      <div>
        {isLoggedIn ? (
          <Profile />
        ) : (
          <Link href={'/auth'} passHref>
            <Anchor>sign in</Anchor>
          </Link>
        )}
      </div>
    </StyledHeader>
  )
}

export default Header
