import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { ButtonNavigation, Nav } from 'styles/nav.module'

const Header: FC = () => {
  const { pathname } = useRouter()

  return (
    <Nav>
      <Link href={'/category'} passHref>
        <ButtonNavigation
          active={pathname.split('/')[1] === 'category' ? true : false}
          type='button'>
          category
        </ButtonNavigation>
      </Link>
      <Link href={'/list'} passHref>
        <ButtonNavigation
          active={pathname.split('/')[1] === 'list' ? true : false}
          type='button'>
          List
        </ButtonNavigation>
      </Link>
    </Nav>
  )
}

export default Header
