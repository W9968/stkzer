import Logo from 'modules/logo/Logo'
import Auth from 'modules/login/Auth'
import Profile from 'modules/button/Profile'

import { FC, useState } from 'react'
import { __auth } from 'context/AuthProvider'
import { Anchor, StyledHeader } from 'theme/header.element'
import { AnimatePresence } from 'framer-motion'

const Header: FC = function () {
  const { isLoaggedIn, login } = __auth()
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <StyledHeader>
      <Logo />
      <div>
        {isLoaggedIn ? (
          <Profile />
        ) : (
          <Anchor onClick={() => setOpen(true)}>sign in</Anchor>
        )}
      </div>
      <AnimatePresence>
        {isOpen && <Auth func={() => setOpen(false)} />}
      </AnimatePresence>
    </StyledHeader>
  )
}

export default Header
