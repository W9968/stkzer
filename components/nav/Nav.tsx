import Link from 'next/link'
import { __s } from 'hooks/useSupa'
import { category } from 'types/data'
import { BiBookAdd } from 'react-icons/bi'
import { FC, useLayoutEffect, useState } from 'react'
import { Anchor, Icon, Line, Navbar } from 'styles/nav.module'

const Nav: FC = () => {
  const [category, setCategories] = useState<category[]>([])

  async function getCategory() {
    const { data } = await __s.from('category').select()
    data && setCategories(data)
  }

  useLayoutEffect(() => {
    getCategory()
  }, []) // eslint-disable-line

  return (
    <Navbar>
      {category.map((el, index) => {
        return (
          <>
            <Link key={el.id} href={`/category/${el.name}`} passHref>
              <Anchor>{el.name}</Anchor>
            </Link>
            {category.length !== index + 1 && <Line />}
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
