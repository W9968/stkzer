import { FC } from 'react'
import Link from 'next/link'
import { category } from 'types/data'
import { BiBookAdd } from 'react-icons/bi'
import { Anchor, Icon, Line, Navbar } from 'styles/nav.module'
import { __store } from 'context/DataProvider'

const Nav: FC = () => {
  const { categories } = __store()

  return (
    <Navbar>
      {categories.map((el: category, index: number) => {
        return (
          <>
            <Link key={el.id} href={`/category/${el.name}`} passHref>
              <Anchor>{el.name}</Anchor>
            </Link>
            {categories.length !== index + 1 && <Line />}
          </>
        )
      })}
      <Link href={'/category'} passHref>
        <Icon>
          <BiBookAdd />
        </Icon>
      </Link>
    </Navbar>
  )
}

export default Nav
