import { FC } from 'react'
import Link from 'next/link'
import { category } from 'types/data'
import { Anchor, Line, Navbar } from 'styles/nav.module'

const Nav: FC = () => {
  return (
    <Navbar>
      <Link href={`/category`} passHref>
        <Anchor>category</Anchor>
      </Link>
      <Line />
    </Navbar>
  )
}

export default Nav
