import Logo from 'modules/logo/Logo'
import Link from 'next/link'
import { FC } from 'react'
import { Anchor, StyledHeader } from 'theme/header.element'

const Header: FC = function () {
  return (
    <StyledHeader>
      <Logo />
      <div>
        {links.map((el, key) => (
          <Link key={key} href={el.path} passHref>
            <Anchor>{el.name}</Anchor>
          </Link>
        ))}
      </div>
    </StyledHeader>
  )
}

const links = [
  {
    name: 'sign in',
    path: '/auth',
  },
  {
    name: 'contact me',
    path: '/contact',
  },
]

export default Header
